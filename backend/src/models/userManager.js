const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

// const { passwordHasher } = require("../services/passwordHelper");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findCandidate() {
    return this.connection.query(
      `select * from  ${this.table} join candidate as c on c.user_id = user.id`
    );
  }

  findHeadhunter() {
    return this.connection.query(
      `select * from  ${this.table} join headhunter as h on h.user_id = user.id`
    );
  }

  findOneCandidate(id) {
    return this.connection.query(
      `select * from  ${this.table} join candidate as c on c.user_id = user.id where user.id = ?`,
      [id]
    );
  }

  findOneHeadhunter(id) {
    return this.connection.query(
      `select * from  ${this.table} join headhunter as h on h.user_id = user.id where user.id = ?`,
      [id]
    );
  }

  async insert(user, photoUrl) {
    return this.connection.query(
      `insert into ${this.table} (password, role , first_name, last_name, birth_date, phone, email,photo_url, profile_description, adress, subscription_date, status) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.password,
        JSON.stringify(user.role),
        user.first_name,
        user.last_name,
        user.birth_date,
        user.phone,
        user.email,
        photoUrl,
        user.profile_description,
        user.adress,
        user.subscription_date,
        user.status,
      ]
    );
  }

  update(id, user) {
    const { role, ...userData } = user;
    const sqlSets = generateSqlSets(userData);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets}, role = ? WHERE id = ?`,
      [...Object.values(userData), JSON.stringify(role), id]
    );
  }
}

module.exports = userManager;
