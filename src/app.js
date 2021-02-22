const express = require('express')
require('./db/mongoose')
const userRoute = require('./routes/users')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoute)

app.listen(port, ()=>{
    console.log(`Servidor no ar porta ${port}`)
})