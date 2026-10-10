import mongoose from "mongoose";
import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find().sort({ createdAt: -1 });
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера" });
    }
};

export const getMovieById = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Некоректний ID" });
        }

        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ message: "Фільм не знайдено" });
        }

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера" });
    }
};

export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({
            message: "Помилка створення фільму"
        });
    }
};

export const updateMovie = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Некоректний ID" });
        }

        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!movie) {
            return res.status(404).json({ message: "Фільм не знайдено" });
        }

        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({
            message: "Помилка оновлення фільму"
        });
    }
};

export const deleteMovie = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Некоректний ID" });
        }

        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) {
            return res.status(404).json({ message: "Фільм не знайдено" });
        }

        res.status(200).json({
            message: "Фільм успішно видалено"
        });
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера" });
    }
};