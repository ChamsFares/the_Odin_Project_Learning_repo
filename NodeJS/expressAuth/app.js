const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const pool = require("../expressPostrgeSQL/db/pool");
const localStrategy = require("passport-local").Strategy;
require("dotenv").config();
const path = require("path");
const bycrpt = require("bcryptjs");

module.exports = new Pool({
  connectionString: `postgersql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:${process.env.LOCAL_HOST}/${process.env.DATA_BASE}`,
});

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});
app.get("/sign-up", (req, res) => {
  res.render("sign_up_form");
});

app.post("/sign-up", (req, res, next) => {
  bycrpt.hash(req.body.password, 10, async (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    try {
      await pool.query(
        "INSERT INTO users (username, password) VALUES ($1, $2)",
        [req.body.username, hashedPassword]
      );
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  });
});
passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1 ",
        [username]
      );
      const user = rows[0];
      if (!user) {
        return done(null, false, { message: "incorrect username" });
      }
      const match = await bycrpt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "incprrect pasword" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const user = rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
});
app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);
app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
