const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class headhunterManager extends AbstractManager {
  constructor() {
    super({ table: "headhunter" });
  }

  insert(headhunter) {
    return this.connection.query(
      `INSERT INTO ${this.table} (skills_area, research_sector, user_id) VALUES (?, ?, ?)`,
      [headhunter.skills_area, headhunter.research_sector, headhunter.user_id]
    );
  }

  update(id, headhunter) {
    const sqlSets = generateSqlSets(headhunter);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(headhunter), id]
    );
  }
}

module.exports = headhunterManager;
