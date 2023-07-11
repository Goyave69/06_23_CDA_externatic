/* eslint-disable camelcase */
const models = require("../models");
const validator = require("../services/validators/jobApplicationsValidators");

const browse = (req, res) => {
  models.job_applications
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
  models.job_applications
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
  const job_applications = req.body;

  // TODO validations (length, format...)

  const { error } = validator.validateJobApplications(job_applications, false);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    const id = parseInt(req.params.id, 10);
    models.job_applications
      .update(id, job_applications)
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
  const job_applications = req.body;

  // TODO validations (length, format...)

  const { error } = validator.validateJobApplications(job_applications);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    models.job_applications
      .insert(job_applications)
      .then(([result]) => {
        res.location(`/job_applications/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const destroy = (req, res) => {
  models.job_applications
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
