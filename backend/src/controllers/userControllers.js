const models = require("../models");

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
// FIXME:
const edit = (req, res) => {
  const user = req.body;
  // FIXME: Add validations (length, format...) before updating the user
  const id = parseInt(req.params.id, 10);
  // Validate user fields
  const { firstname, lastname, email, city, language } = user;
  const errors = [];
  if (!firstname || firstname.trim() === "") {
    errors.push({ field: "firstname", message: "First name is required" });
  }
  if (!lastname || lastname.trim() === "") {
    errors.push({ field: "lastname", message: "Last name is required" });
  }
  if (!email || email.trim() === "") {
    errors.push({ field: "email", message: "Email is required" });
  } else {
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      errors.push({ field: "email", message: "Invalid email format" });
    }
  }
  if (!city || city.trim() === "") {
    errors.push({ field: "city", message: "City is required" });
  }

  if (!language || language.trim() === "") {
    errors.push({ field: "language", message: "Language is required" });
  }

  if (errors.length > 0) {
    res.status(422).json({ validationErrors: errors });
    return;
  }

  models.user
    .update(user, {
      where: {
      id: id,
      },
    })
  .then((result) => {
  if (result[0] === 0) {
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
// FIXME:

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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
};
