import express, { json } from 'express'
import morgan from 'morgan';
import { router as auth }   from './auth/network'
import { connectDB } from '../database/db';
import helmet from 'helmet';
import cors from 'cors'
import errorMiddleware from './middleware/error.middleware';
import { corsOptions, envConfig } from '../config';
// environment variables
// database connection
connectDB()
const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(helmet())
app.use(cors(corsOptions))
//routes
app.use('/auth',auth)

app.use(errorMiddleware)

app.listen(envConfig.server.port, () => {
    console.log(`Server running ont port: ${envConfig.server.port}`)
})