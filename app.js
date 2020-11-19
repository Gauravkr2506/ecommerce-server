const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const express = require("express");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const brainTreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"));

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// route middleware
mongoose.connection.on("error", (err) => {
  console.log(`DB connection error ${err}`);
});

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", brainTreeRoutes);
app.use("/api", orderRoutes);

const port = process.env.port || 8001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
