/* eslint-disable camelcase */
const models = require("../models");
const validator = require("../services/validators/headhunterValidators");

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
const add = (req, res) => {
  const headhunter = req.body;

  // TODO validations (length, format...)

  const { error } = validator.validateHeadhunter(headhunter);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.headhunter
      .insert(headhunter)
      .then(([result]) => {
        res.location(`/headhunter/${result.insertId}`).sendStatus(201);
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
