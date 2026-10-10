import mongoose from "mongoose";

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Успішно підключено до MongoDB");
    } catch (error) {
        console.error(
            "Помилка підключення до MongoDB:",
            error.message
        );
        process.exit(1);
    }
};