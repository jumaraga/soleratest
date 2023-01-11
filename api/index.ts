import express, { json } from 'express'
import morgan from 'morgan';
import { router as auth }   from './auth/network'
import { connectDB } from '../database/db';
import helmet from 'helmet';
import errorMiddleware from './middleware/error.middleware';
// environment variables
// database connection
connectDB()
const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(helmet())

//routes
app.use('/auth',auth)

app.use(errorMiddleware)

app.listen(4000, () => {
    console.log(`Server running ont port: ${4000}`)
})