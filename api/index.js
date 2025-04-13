import express from "express";
import dotenv from "dotenv";
import connetDB from "./config/connectDB.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8000;

const DB_URl =
  "mongodb+srv://rajangupta8472:HnSUMs1MvxQrOYgy@cluster0.aqntjnl.mongodb.net/playo";

// DB connection
connetDB(DB_URl);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// loads Routes
app.use(
  cors({
    origin: "*",      
  })
);
app.use(express.json());
app.use("/api/v1/", authRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
