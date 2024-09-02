const db = require("../db/queries");

const logUsernames = async (req, res) => {
  try {
    const { search } = req.query;
    const usernames = await db.getAllUserNames(search);
    const usernameList = usernames.map((user) => user.username).join(", ");

    console.log(`Usernames: ${usernameList}`);
    res.send("Usernames: " + usernameList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const displayForm = (req, res) => {
  res.sendFile("form.html", { root: "./views" });
};

const saveUsername = async (req, res) => {
  try {
    const { username } = req.body;
    console.log("Username to be saved: ", username);
    await db.insertUserName(username);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUsers = async (req, res) => {
  try {
    await db.deleteAllUserNames();
    res.json({ message: "All usernames deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  logUsernames,
  displayForm,
  saveUsername,
  deleteUsers,
};
