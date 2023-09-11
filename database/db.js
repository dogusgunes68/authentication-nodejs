const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile.development);
db.migrate.latest();

module.exports = db;