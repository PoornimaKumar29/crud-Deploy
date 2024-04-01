import express from 'express'
import { createUser, fetchDataFromDummyJson,  } from '../handlers/users.js';

const usersRouter = express.Router();

// I want to handle my endpoints here:
// usersRouter.get('/', getUsers)
usersRouter.post('/', createUser)
usersRouter.get('/',fetchDataFromDummyJson)
// usersRouter.patch('/', updateUser)
// usersRouter.delete('/', deleteUser)

export default usersRouter;