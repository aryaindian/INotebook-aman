const connectToMongo = require('./DataBase');
connectToMongo();

//Express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Route By routers
app.use('/notes', require('./routes/notes'))
app.use('/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`You have connected with http://localhost:${port}`)
})