import express from "express";
import connectDB from "./config/db.js";
import orderRoutes from "./routes/orderroutes.js";
import cors from "cors";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
