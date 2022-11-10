import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import contactRoute from "./routes/contactRoute.js";

import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();
const __dirname = path.resolve("");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoute);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 5002;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port:${port}`.yellow.bold
  )
);
