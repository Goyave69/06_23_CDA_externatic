/* eslint-disable camelcase */
const models = require("../models");
const headhunterValidator = require("../services/validators/headhunterValidators");
const validator = require("../services/validators/userValidators");
const { passwordHasher } = require("../services/passwordHelper");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneCandidate = (req, res) => {
  models.user
    .findOneCandidate(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneHeadhunter = (req, res) => {
  models.user
    .findOneHeadhunter(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCandidate = (req, res) => {
  models.user
    .findCandidate()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getHeadhunter = (req, res) => {
  models.user
    .findHeadhunter()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = async (req, res) => {
  const user = req.body;
  user.password = await passwordHasher(user.password);
  // TODO validations (length, format...)

  const { error } = validator.validateUser(user, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);
    models.user
      .update(id, user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const add = async (req, res) => {
  const data = JSON.parse(req.body.data);
  const photo = req.file;
  data.photo_url = photo.filename;
  data.password = await passwordHasher(data.password);

  const headhunterData = JSON.parse(req.body.headhunterData);

  // TODO validations (length, format...)
  const { error } = validator.validateUser(data);

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.user
      .insert(data)
      .then(([result]) => {
        const userId = result.insertId; // Extract the user_id from the result
        headhunterData.user_id = userId;

        const { error: candidateError } =
          headhunterValidator.validateHeadhunter(headhunterData);
        if (candidateError) {
          res.status(422).json({ validationErrors: candidateError.details });
        }

        models.headhunter
          .insert(headhunterData)
          .then(() => {
            res.location(`/user/${userId}`).sendStatus(201);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getCandidate,
  getHeadhunter,
  getOneCandidate,
  getOneHeadhunter,
};
