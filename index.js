const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  const id = todos.length + 1;
  todos.push({ id, title });
  res.send({ id, title });
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  res.send({ id });
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
