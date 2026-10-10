import express from "express";

import {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} from "../controllers/movieController.js";

import { validateMovie } from "../middleware/validateMovie.js";

const router = express.Router();

router.get("/", getMovies);

router.get("/:id", getMovieById);

router.post("/", validateMovie, createMovie);

router.put("/:id", validateMovie, updateMovie);

router.delete("/:id", deleteMovie);

export default router;