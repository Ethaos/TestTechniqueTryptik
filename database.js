import sqlite3 from "sqlite3";

const db = new sqlite3.Database('TestTryptik.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);

    console.log('connection successful');
});

export const getTodosDB = function () {
    const query = "SELECT * FROM Todos";
    const todos = [];

    db.each(query, [], (err, rows) => {
        if (err) return console.log(err.message);
        console.log(rows);
    });
    return todos;
}

export const getTodosByIdDB = function (uuid) {
    const query = "SELECT * FROM Todos WHERE uuid = ?";
    const todo = {};
    db.get(query, [uuid], (err, row) => {
        if (err) return console.log(err.message);
        console.log(row);
    })
    return todo;
}

export const createTodosDB = function (todoAdd) {
    const query = "INSERT INTO Todos (uuid, label, done) values (?,?,?)";
    const todo = {};
    db.run(query, [todoAdd.uuid, todoAdd.label, todoAdd.done ], (err, row) => {
        if (err) return console.log(err.message);
        console.log(row);
    })
    return todo;
}

export const updateTodosDB = function (todoUpdate) {
    const query = "UPDATE Todos SET label = ?, done = ? WHERE uuid = ?";
    const todo = {};
    db.run(query, [ todoUpdate.label, todoUpdate.done, todoUpdate.uuid], (err, row) => {
        if (err) return console.log(err.message);
        console.log(row);
    })
    return todo;
}