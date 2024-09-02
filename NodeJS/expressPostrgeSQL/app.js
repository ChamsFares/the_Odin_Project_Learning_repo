const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRouter");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
