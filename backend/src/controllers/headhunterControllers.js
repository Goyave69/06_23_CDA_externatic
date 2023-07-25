/* eslint-disable camelcase */
const models = require("../models");
const headhunterValidator = require("../services/validators/headhunterValidators");
const validator = require("../services/validators/userValidators");
const { passwordHasher } = require("../services/passwordHelper");

const browse = (req, res) => {
  models.headhunter
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.headhunter
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

const edit = (req, res) => {
  const headhunter = req.body;

  // TODO validations (length, format...)

  const { error } = validator.validateHeadhunter(headhunter, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);
    models.headhunter
      .update(id, headhunter)
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

        const { error: headhunterError } =
          headhunterValidator.validateHeadhunter(headhunterData);
        if (headhunterError) {
          res.status(422).json({ validationErrors: headhunterError.details });
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
  models.headhunter
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
};
