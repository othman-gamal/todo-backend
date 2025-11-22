const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getTodos, addTodo, editTodo, deleteTodo, deleteAllTodos } = require("../controllers/todoController");

router.get("/", authMiddleware, getTodos);
router.post("/add", authMiddleware, addTodo);
router.put("/edit/:id", authMiddleware, editTodo);
router.delete("/delete/:id", authMiddleware, deleteTodo);
router.delete("/deleteAll", authMiddleware, deleteAllTodos);

module.exports = router;
