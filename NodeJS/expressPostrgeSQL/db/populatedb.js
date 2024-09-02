const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255));

INSERT INTO usernames (username)
VALUES
('Bryan'),
('Odin'),
('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgersql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:${process.env.LOCAL_HOST}/${process.env.DATA_BASE}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();
