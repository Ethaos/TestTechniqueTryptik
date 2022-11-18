import { v4 as uuidV4 } from "uuid";

const todos = [
    { uuid: '00000000-0000-0000-0000-000000000000', label: 'Faire mon repository', done: false },
    { uuid: '00000000-0000-0000-0000-000000000001', label: 'Faire mon repository2', done: true }
]

export const getTodos = function (req, res) {
    res.json(todos);
}

export const getTodosById = function (req, res) {
    const todoId = req.params.uuid;

    const todo = todos.find(function (todo) {
        return todo.uuid === todoId;
    })
    res.json(todo);
}

export const createTodos = function (req, res) {
    const { label, done } = req.body;

    todos.push({
        uuid: uuidV4(),
        label: label,
        done: done
    });

    res.json(todos);
}

export const updateTodos = function (req, res) {
    const todoId = req.params.uuid;
    const { label, done } = req.body;

    const todo = todos.map(function (todo) {
        if (todo.uuid === todoId) {
            return {
                uuid: todo.uuid,
                label: label,
                done: done
            }
        }
        return todo;
    })
    res.json(todo);
}

