import dns from "node:dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./services/db.js";
import movieRoutes from "./routes/movieRoutes.js";

dns.setServers(["8.8.8.8"]);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.get("/", (req, res) => {
    res.send("CinemaHub API працює!");
});

app.use("/api/movies", movieRoutes);

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(PORT, () => {
            console.log(`Сервер запущено на порті ${PORT}`);
        });
    } catch (error) {
        console.error("Помилка запуску:", error.message);
        process.exit(1);
    }
};

startServer();