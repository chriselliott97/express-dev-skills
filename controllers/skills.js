function(req, res) {
  res.render('todos/index', {
    todos: todos
  })
}