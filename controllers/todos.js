import { v4 as uuidV4 } from "uuid";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database('TestTryptik.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);

    console.log('connection successful');
});

export const getTodos = function (req, res) {
    const query = "SELECT * FROM Todos";
    const todos = [];

    db.each(query, todos, (err, rows) => {
        if (err) return console.log(err.message);
        res.json({
            "message": "Succes",
            "data": rows
        })
    });
}

export const getTodosById = function (req, res) {
    const query = "SELECT * FROM Todos WHERE uuid = ?";
    const todoId = req.params.uuid;
    db.get(query, [todoId], (err, row) => {
        if (err) return console.log(err.message);
        res.json({
            "message": "Succes",
            "data": row
        })
    })
}

export const createTodos = function (req, res) {
    const { label, done } = req.body;

    const todoAdd = {
        uuid: uuidV4(),
        label: label,
        done: done
    }

    const query = "INSERT INTO Todos (uuid, label, done) values (?,?,?)";
    db.run(query, [todoAdd.uuid, todoAdd.label, todoAdd.done], (err, row) => {
        if (err) return console.log(err.message);
        res.json({
            "message": "Succes",
            "data": todoAdd
        })
    })
}

export const updateTodos = function (req, res) {
    const todoId = req.params.uuid;
    const { label, done } = req.body;

    const todoUpdate = {
        uuid: todoId,
        label: label,
        done: done
    }

    const query = "UPDATE Todos SET label = ?, done = ? WHERE uuid = ?";
    const todo = {};
    db.run(query, [todoUpdate.label, todoUpdate.done, todoUpdate.uuid], (err, row) => {
        if (err) return console.log(err.message);
        res.json({
            "message": "Succes",
            "data": todoUpdate
        })
    })
}

