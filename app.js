const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add todo
app.post('/todos', (req, res) => {
    const todo = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    todos.push(todo);
    res.json(todo);
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.json({ success: true });
});

// Toggle complete
app.patch('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (todo) todo.completed = !todo.completed;
    res.json(todo);
});

app.listen(3000, () => console.log('Todo app running on port 3000'));