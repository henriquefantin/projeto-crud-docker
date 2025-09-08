import express from 'express';
import { createUser, getUser, getAllUsers, updateUser, deleteUser } from './controllers/userController.js';

const router = express.Router();

router.post('/cadastrar', createUser);
router.post('/atualizar', updateUser);
router.get('/registro/individual/:id', getUser);
router.get('/registro/todos', getAllUsers);
router.delete('/deletar/:id', deleteUser);

export default router;