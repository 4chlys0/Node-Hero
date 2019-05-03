const express = require('express')
const app = express()

//demonstrating Middleware pattern

//[HTTP Request]--->[Middleware 1]--->[Middleware 2]--->[Middleware 3]
//       ^------------------------------------------------return
//middlware 1
//next indicates jump to next middleware or route handler
app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

//middlware 2
//adds "chance" property to request and passes to next middleware
app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

//middlware 3
app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)