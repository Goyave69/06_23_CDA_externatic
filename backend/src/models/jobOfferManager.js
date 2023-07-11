/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "job_offers" });
  }

  publication;

  insert(offer) {
    return this.connection.query(
      `insert into ${this.table} (name, location, job_description, status, edition_date, contract_type, salary_min, salary_max, headhunter_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.name,
        offer.location,
        offer.job_description,
        offer.status,
        offer.edition_date,
        offer.contract_type,
        offer.salary_min,
        offer.salary_max,
        offer.headhunter_id,
      ]
    );
  }

  update(id, offer) {
    const sqlSets = generateSqlSets(offer);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(offer), id]
    );
  }

  findAllBy = (req) => {
    const andWhere = [];
    const orWhere = [];

    if (req.query.name != null) {
      andWhere.push({
        column: "name",
        value: `%${req.query.name}%`,
        operator: "LIKE",
      });
    }
    if (req.query.location != null) {
      andWhere.push({
        column: "location",
        value: `%${req.query.location}%`,
        operator: "LIKE",
      });
    }
    if (req.query.contract_type != null) {
      if (typeof req.query.contract_type === "string") {
        orWhere.push({
          column: "contract_type",
          value: req.query.contract_type,
          operator: "=",
        });
      } else {
        req.query.contract_type.forEach((item) => {
          orWhere.push({
            column: "contract_type",
            value: item,
            operator: "=",
          });
        });
      }
    }
    if (req.query.is_fulltime != null) {
      andWhere.push({
        column: "is_fulltime",
        value: req.query.is_fulltime,
        operator: "=",
      });
    }
    if (req.query.is_remote != null) {
      andWhere.push({
        column: "is_remote",
        value: req.query.is_remote,
        operator: "=",
      });
    }
    if (req.query.salary_min != null) {
      andWhere.push({
        column: "salary_min",
        value: req.query.salary_min,
        operator: ">=",
      });
    }

    const sqlAndWhere = andWhere
      .map((filter) => `${filter.column} ${filter.operator} ?`)
      .join(" and ");

    const sqlOrWhere = orWhere
      .map((filter) => `${filter.column} ${filter.operator} ?`)
      .join(" or ");

    const whereAndValues = andWhere.map(({ value }) => value);
    const whereOrValues = orWhere.map(({ value }) => value);

    return this.connection.query(
      `select * from  ${this.table} where ${sqlAndWhere} and ${sqlOrWhere}`,
      whereAndValues.concat(whereOrValues)
    );
  };
}
module.exports = JobOfferManager;
