/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  insert(candidate) {
    return this.connection.query(
      `insert into ${this.table} ( profession, researched_job, job_search_location, availability_date, skills, languages, cv_url, motivation_letter_url, user_id) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidate.profession,
        candidate.researched_job,
        candidate.job_search_location,
        candidate.availability_date,
        candidate.skills,
        candidate.languages,
        candidate.cv_url,
        candidate.motivation_letter_url,
        candidate.user_id,
        candidate.id,
      ]
    );
  }

  update(id, candidate) {
    const sqlSets = generateSqlSets(candidate);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(candidate), id]
    );
  }

  // récupération des candidats avec les éléments présents dans user :
  // FIXME:
  getCandidateWithUser() {
    return this.connection.query(
      `SELECT candidate.profession, 
      candidate.id,
      candidate.languages, 
      candidate.availability_date, 
      candidate.skills, 
      candidate.researched_job,
      candidate.job_search_location,
      user.last_name,
      user.first_name,
      user.subscription_date,
      user.role,
      user.status
      FROM ${this.table}  
      JOIN user ON candidate.user_id = user.id`,
      []
    );
  }
}

module.exports = CandidateManager;
