const express = require("express");
const app = express();
const path = require("path");
const { title } = require("process");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("about", {
    title: "Home Page",
    description: "Welcome to the Home Page",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    description: "This is the About page",
  });
});
app.get("/contact-me", (req, res) => {
  res.render("contact-me", { title: "Contact Me" });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
