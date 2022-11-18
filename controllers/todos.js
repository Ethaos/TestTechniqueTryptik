import { v4 as uuidV4 } from "uuid";
import { getTodosDB, getTodosByIdDB, createTodosDB, updateTodosDB } from "../database.js"

/*const todos = [
    { uuid: '00000000-0000-0000-0000-000000000000', label: 'Faire mon repository', done: false },
    { uuid: '00000000-0000-0000-0000-000000000001', label: 'Faire mon repository2', done: true }
]*/

export const getTodos = function (req, res) {
    let results = getTodosDB();
    res.json(results);
    /*res.json(todos);*/
}

export const getTodosById = function (req, res) {
    const todoId = req.params.uuid;
    let results = getTodosByIdDB(todoId);
    res.json(results);
    /*res.json(todos);*/
}

export const createTodos = function (req, res) {
    const { label, done } = req.body;

    const todoAdd = {
        uuid: uuidV4(),
        label: label,
        done: done
    }

    let results = createTodosDB(todoAdd);
    res.json(results);

    /*todos.push({
        uuid: uuidV4(),
        label: label,
        done: done
    });

    res.json(todos);*/
}

export const updateTodos = function (req, res) {
    const todoId = req.params.uuid;
    const { label, done } = req.body;

    const todoUpdate = {
        uuid: todoId,
        label: label,
        done: done
    }

    let results = updateTodosDB(todoUpdate);
    res.json(results);

    /*const todo = todos.map(function (todo) {
        if (todo.uuid === todoId) {
            return {
                uuid: todo.uuid,
                label: label,
                done: done
            }
        }
        return todo;
    })
    res.json(todo);*/
}

