const { getTodos, addTodos, updateTodos, deleteTodos } = require("../controller/todoController")

const router = require("express").Router()

router
    .get("/todo", getTodos)
    .post("/add-todo", addTodos)
    .put("/update-todo/:id", updateTodos)
    .delete("/delete-todo/:id", deleteTodos)



module.exports = router