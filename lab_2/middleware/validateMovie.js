export const validateMovie = (req, res, next) => {
    const { title, genre, duration, showtime } = req.body;

    if (
        typeof title !== "string" ||
        !title.trim() ||
        typeof genre !== "string" ||
        !genre.trim() ||
        typeof showtime !== "string" ||
        !showtime.trim()
    ) {
        return res.status(400).json({
            message: "Заповніть назву, жанр та час сеансу"
        });
    }

    if (
        typeof duration !== "number" ||
        !Number.isFinite(duration) ||
        duration <= 0
    ) {
        return res.status(400).json({
            message: "Тривалість фільму має бути додатним числом"
        });
    }

    next();
};