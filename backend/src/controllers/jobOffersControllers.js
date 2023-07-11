/* eslint-disable camelcase */
const models = require("../models");
const validator = require("../services/validators/jobOffersValidators");

const browse = (req, res) => {
  const promise =
    Object.keys(req.query).length > 0
      ? models.job_offers.findAllBy(req)
      : models.job_offers.findAll();
  promise
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.job_offers
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
  const job_offers = req.body;

  // TODO validations (length, format...)

  const { error } = validator.validateJobOffer(job_offers, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);
    models.job_offers
      .update(id, job_offers)
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
  const job_offers = req.body;

  // TODO validations (length, format...)

  const { error } = validator.validateJobOffer(job_offers);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.job_offers
      .insert(job_offers)
      .then(([result]) => {
        res.location(`/job_offers/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroy = (req, res) => {
  models.job_offers
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
