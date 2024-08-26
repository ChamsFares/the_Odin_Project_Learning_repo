const express = require("express");
const userRouter = require("<path-to-user-routes>");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
