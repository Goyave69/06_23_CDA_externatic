const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  insert(candidate) {
    return this.connection.query(
      `insert into ${this.table} (job_title, profession, profile_description, researched_job, job_search_location, availability_date, skills, languages, is_admin, cv_url, motivation_letter_url, user_id) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidate.job_title,
        candidate.profession,
        candidate.profile_description,
        candidate.researched_job,
        candidate.job_search_location,
        candidate.availability_date,
        candidate.skills,
        candidate.languages,
        candidate.is_admin,
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
}

module.exports = JobOfferManager;
