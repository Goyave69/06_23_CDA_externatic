/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class jobApplicationsManager extends AbstractManager {
  constructor() {
    super({ table: "job_applications" });
  }

  insert(job_applications) {
    return this.connection.query(
      `INSERT INTO ${this.table} (status,is_favorite, date, job_offers_id, candidate_id) VALUES (?, ?, ?, ?, ?)`,
      [
        job_applications.status,
        job_applications.is_favorite,
        job_applications.date,
        job_applications.job_offers_id,
        job_applications.candidate_id,
      ]
    );
  }

  update(id, job_applications) {
    const sqlSets = generateSqlSets(job_applications);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(job_applications), id]
    );
  }
}

module.exports = jobApplicationsManager;
