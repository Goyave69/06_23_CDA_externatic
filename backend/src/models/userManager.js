const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [
        user.password,
        user.type,
        user.role,
        user.first_name,
        user.last_name,
        user.birth_date,
        user.phone,
        user.email,
        user.adress,
        user.subscription_date,
        user.status,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [
        user.password,
        user.type,
        user.role,
        user.first_name,
        user.last_name,
        user.birth_date,
        user.phone,
        user.email,
        user.adress,
        user.subscription_date,
        user.status,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
