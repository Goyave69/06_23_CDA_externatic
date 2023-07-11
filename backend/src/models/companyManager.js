const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class companyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insert(company) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, adress, phone, email, description, industry_field, photo_url) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        company.name,
        company.adress,
        company.phone,
        company.email,
        company.description,
        company.industry_field,
        company.photo_url,
      ]
    );
  }

  update(id, company) {
    const sqlSets = generateSqlSets(company);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(company), id]
    );
  }
}

module.exports = companyManager;
