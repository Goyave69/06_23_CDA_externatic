const AbstractManager = require("./AbstractManager");

class headhunterCompanyManager extends AbstractManager {
  constructor() {
    super({ table: "headhunter_companies" });
  }
}

module.exports = headhunterCompanyManager;
