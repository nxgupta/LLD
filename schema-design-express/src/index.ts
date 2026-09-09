import "reflect-metadata";
import express from 'express';
import { AppDataSource } from './data-source';


async function initialiseDataSource() {
    try {
        await AppDataSource.initialize()
        console.log("Data Source has been initialized!");
        let app = express();
        app.use(express.json());
        app.get("/", (req, res) => {
            res.json({ message: "Connected to PostgreSQL and Express!" });
        })
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error("Error during Data Source initialization:", error);

    }
}
initialiseDataSource();