require('dotenv').config()
const express = require('express')

const app= express()

app.get('/', (req, res)=>{
    console.log("Someone is trying to access the home page")

    res.send('<h1>Hola Mundo</h1>')
})

const PORT= process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log('Server running on port',PORT)
})