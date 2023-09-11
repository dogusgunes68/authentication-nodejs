const knex = require("knex");
const knexfile = require("./knexfile");

const db = knexfile(knexfile.development);

module.exports = db;