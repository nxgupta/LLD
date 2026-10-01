import "reflect-metadata"
import { AppDataSource } from "./data-source.js";
import express from 'express';

const app = express();
app.use(express.json());

async function startServer() {
    await AppDataSource.initialize()
    app.listen(3000, () => console.log('listening at port 3000'));
}

startServer().catch(console.error);