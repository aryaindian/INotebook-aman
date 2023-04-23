const connectToMongo = require('./DataBase');
connectToMongo();

//Express
const express = require('express')
const app = express()
const port = 3000

//If we have to use req.body which used in './routes/auth' then first of all we have to use a middlewere called "app.use(express.json())" which i written below 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Route By routers
app.use('/notes', require('./routes/notes'))
app.use('/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`You have connected with http://localhost:${port}`)
})