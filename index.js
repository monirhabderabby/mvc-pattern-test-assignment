const express = require('express')
const app = express()
const port = 9000
const usersRoute = require("./router/users.router")

app.use("/users", usersRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})