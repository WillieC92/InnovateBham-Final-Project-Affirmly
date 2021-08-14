import * as dotenv from "dotenv";

dotenv.config();

// This is picked up by the db/index.ts file under a createConnection
export default {
    mysql: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_SCHEMA,
            port: 3306,
    }
}