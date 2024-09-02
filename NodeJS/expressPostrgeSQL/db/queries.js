const pool = require("./pool");

const getAllUserNames = async (search) => {
  let query = "SELECT * FROM usernames";
  const params = [];

  if (search) {
    query += " WHERE username::text LIKE $1";
    params.push(`%${search}%`);
  }

  const { rows } = await pool.query(query, params);
  return rows;
};

const insertUserName = async (username) => {
  const query = "INSERT INTO usernames (username) VALUES ($1)";
  await pool.query(query, [username]);
};

const deleteAllUserNames = async () => {
  const query = "DELETE FROM usernames";
  await pool.query(query);
};

module.exports = {
  getAllUserNames,
  insertUserName,
  deleteAllUserNames,
};
