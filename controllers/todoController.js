const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.userId });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const todo = await Todo.create({ userId: req.user.userId, title: req.body.title });
  res.status(201).json(todo);
};

exports.editTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};

exports.deleteAllTodos = async (req, res) => {
  await Todo.deleteMany({ userId: req.user.userId });
  res.json({ message: "All todos deleted" });
};
