const jwt = require("jsonwebtoken");
const fs = require("fs");
const connection = require("./database");
const { passwordVerification } = require("../services/passwordHelper");

const privateKey = fs.readFileSync("jwtRS256.key");

function login({ email, password }) {
  return connection
    .promise()
    .query("SELECT * FROM user WHERE email = ?", [email])
    .then(async ([rows]) => {
      if (rows.length === 0) {
        return { status: 401, message: "Email or password is wrong" };
      }
      if (!(await passwordVerification(password, rows[0].password))) {
        return { status: 401, message: "Email or password is wrong" };
      }

      const token = jwt.sign(
        { userId: rows[0].id, role: rows[0].role },
        privateKey,
        {
          algorithm: "RS256",
        }
      );

      return { status: 200, message: { token } };
    });
}

module.exports = {
  login,
};
