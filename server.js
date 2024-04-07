const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const path = require("path");
//cors
//dot config
dotenv.config();

//MongoDB connection
connectDB();

//rest object
const app = express(); //All functionality of express gets stored in app

//middlewares
// app.use(cors(corsOptions));
// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://bb-managment-client.vercel.app"
//   ); // Allow requests from any origin
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://bb-managment-client.vercel.app/"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "https://bb-managment-client.vercel.app",
//     credentials: true,
//   })
// );
// app.use(function (req, res, next) {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://bb-managment-client.vercel.app"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
