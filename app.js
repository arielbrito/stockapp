const express = require('express')

const app= express()

app.get('/', (req, res)=>{
    console.log("Someone is trying to access the home page")

    res.send('<h1>Hola Mundo</h1>')
})

app.listen(4000, ()=>{
    console.log('Server running on port 4000')
})