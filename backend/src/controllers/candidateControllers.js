const models = require("../models");
const candidateValidator = require("../services/validators/candidateValidators");
// const userValidator = require("../services/validators/userValidators");
const validator = require("../services/validators/userValidators");
const { passwordHasher } = require("../services/passwordHelper");

const browse = (req, res) => {
  models.candidate
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
  models.candidate
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

// const edit = async (req, res) => {
//   const data = JSON.parse(req.body.data);
//   data.password = await passwordHasher(data.password);

//   const candidateData = JSON.parse(req.body.candidateData);
//   const { cv, lm, avatar } = req.files;
//   if (avatar) {
//     data.photo_url = avatar[0].filename;
//   }
//   if (cv) {
//     candidateData.cv_url = cv[0].filename;
//   }
//   if (lm) {
//     candidateData.motivation_letter_url = lm[0].filename;
//   }

//   const { error: userError } = validator.validateUser(data, false);
//   if (userError) {
//     res.status(422).json({ validationErrors: userError.details });
//   } else {
//     const id = parseInt(req.params.id, 10);
//     models.user
//       .update(req.body.userId, data)
//       .then(([result1]) => {
//         const { error: candidateError } = candidateValidator.validateCandidate(
//           candidateData,
//           false
//         );
//         if (candidateError) {
//           res.status(422).json({ validationErrors: candidateError.details });
//         } else if (result1.affectedRows === 0) {
//           res.sendStatus(404);
//         } else {
//           res.sendStatus(204);
//         }
//         candidateData.user_id = req.body.userId;
//         models.candidate
//           .update(id, candidateData)
//           .then(([result2]) => {
//             if (result2.affectedRows === 0) {
//               res.sendStatus(404);
//             } else {
//               res.sendStatus(204);
//             }
//           })
//           .catch((err) => {
//             console.error(err);
//             res.sendStatus(500);
//           });
//       })
//       .catch((err) => {
//         console.error(err);
//         res.sendStatus(500);
//       });
//   }
// };

const edit = async (req, res) => {
  const data = JSON.parse(req.body.data);
  data.password = await passwordHasher(data.password);

  const candidateData = JSON.parse(req.body.candidateData);
  const { cv, lm, avatar } = req.files;
  if (avatar) {
    data.photo_url = avatar[0].filename;
  }
  if (cv) {
    candidateData.cv_url = cv[0].filename;
  }
  if (lm) {
    candidateData.motivation_letter_url = lm[0].filename;
  }

  const { error: userError } = validator.validateUser(data, false);
  if (userError) {
    res.status(422).json({ validationErrors: userError.details });
  } else {
    const id = parseInt(req.params.id, 10);

    try {
      // First, update the user table
      const [userUpdateResult] = await models.user.update(
        req.body.userId,
        data
      );
      if (userUpdateResult.affectedRows === 0) {
        return res.sendStatus(404);
      }

      // Validate the candidate data
      const { error: candidateError } = candidateValidator.validateCandidate(
        candidateData,
        false
      );
      if (candidateError) {
        return res
          .status(422)
          .json({ validationErrors: candidateError.details });
      }

      // Next, update the candidate table
      const [candidateUpdateResult] = await models.candidate.update(
        id,
        candidateData
      );
      if (candidateUpdateResult.affectedRows === 0) {
        return res.sendStatus(404);
      }

      // If everything is successful, send the final response
      return res.sendStatus(204);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }
};

const add = async (req, res) => {
  const data = JSON.parse(req.body.data);
  data.password = await passwordHasher(data.password);

  const candidateData = JSON.parse(req.body.candidateData);
  const { cv, lm, avatar } = req.files;
  data.photo_url = avatar[0].filename;
  candidateData.cv_url = cv[0].filename;
  candidateData.motivation_letter_url = lm[0].filename;
  // console.log(data);
  // console.log(candidateData);

  // TODO validations (length, format...)

  const { error: userError } = validator.validateUser(data);

  if (userError) {
    res.status(422).json({ validationErrors: userError.details });
  } else {
    models.user
      .insert(data)
      .then(([result]) => {
        const userId = result.insertId; // Extract the user_id from the result
        candidateData.user_id = userId; // Associate the user_id with candidateData
        const { error: candidateError } =
          candidateValidator.validateCandidate(candidateData);
        if (candidateError) {
          res.status(422).json({ validationErrors: candidateError.details });
        }
        models.candidate
          .insert(candidateData)
          .then(() => {
            res.location(`/candidate/${userId}`).sendStatus(201);
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
  models.candidate
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
