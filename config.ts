import dotenv from 'dotenv'
import { CorsOptions } from 'cors'
dotenv.config();
export const envConfig = {
    database: {
        port: (process.env.DB_PORT || 3000) as number,
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USERNAME || 'username',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE
    },
    server: {
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    },
    bcrypt: {
        salt: process.env.SALT || 'salt'
    }
}


export const corsOptions: CorsOptions = {
    origin:
        envConfig.server.environment === 'producction'
            ? 'https://ourHostUrl'
            : 'http://localhost:3000',
    credentials:true,
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
        'OPTIONS',
    ],
}
