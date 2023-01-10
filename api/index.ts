import express, { json } from 'express'
import morgan from 'morgan';
import { router as auth }   from './auth/network'
const app = express();
app.use(json());
app.use(morgan('dev'));

//routes

app.use('/auth',auth)

app.listen(4000, () => {
    console.log(`Server running ont port: ${4000}`)
})