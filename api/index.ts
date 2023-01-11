import express, { json } from 'express'
import morgan from 'morgan';
import { router as auth }   from './auth/network'
import dotenv from 'dotenv'
import { connectDB } from '../database/db';
import helmet from 'helmet';
// environment variables
// database connection
connectDB()
const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(helmet())

//routes

app.use('/auth',auth)

app.listen(4000, () => {
    console.log(`Server running ont port: ${4000}`)
})