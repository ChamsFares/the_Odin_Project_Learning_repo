const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  connectionString: `postgersql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:${process.env.LOCAL_HOST}/${process.env.DATA_BASE}`,
});
