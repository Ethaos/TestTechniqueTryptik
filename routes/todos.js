import express from "express";
import { getTodos, getTodosById, createTodos, updateTodos } from "../controllers/todos.js"

const router = express.Router();

router.get('/todos', getTodos)

router.get('/todos/:uuid', getTodosById)

router.post('/todos', createTodos)

router.put('/todos/:uuid', updateTodos)

export default router;