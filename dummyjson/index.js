import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users.js';

const app = express();

app.use('/users', usersRouter)

app.use(cors())

app.listen(3000, () => console.log("SERVER STARTED"))