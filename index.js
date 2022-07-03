const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

app.use(express.json()); //to set the json as post request type.
// AUTHENTICATION ROUTES
app.use("/api/auth", authRoutes);
// USER ROUTES
app.use("/api/user", userRoutes);

app.listen(process.env.PORT_NO, () =>
  console.log(`Sever listening to port ${process.env.PORT_NO}`)
);
