import { DataSource } from "typeorm";

export const AppDataSource = new DataSource(
    {
        type: "postgres",
        host: "localhost",
        port: 5434,
        username: "bookmyshow",
        password: "bookmyshow",
        database: "bookmyshow",
        synchronize: false,
        entities: ["models/*.ts"]
    }
)