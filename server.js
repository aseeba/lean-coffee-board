const express = require('express')
const { v4 } = require('uuid')
const app = express()
let users = []
app.use(express.json()) // add middleware for json data
app.get('/api/users', (req, res) => {
  res.json(users)
})
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  res.json(users.find(user => user.id === id))
})
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  const index = users.findIndex(user => user.id === id)
  users = [...users.slice(0, index), ...users.slice(index + 1)]
  res.json(users)
})
app.post('/api/users', (req, res) => {
  // exercise: add id (via uuid) for each new user
  const newUser = { ...req.body, id: v4() }
  users.push(newUser)
  res.json(newUser)
})
app.get('/api/cards', (req, res) => {
  res.json([{ title: 'First card' }])
})
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
