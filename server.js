console.log("Web Server starts")
const express = require('express')
const app = express()
const port = 3000

// Traditional API
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Rest API
app.get('/rest', (req, res) => {
    res.json({ name: "Marco", age: 21, group: MIT })
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
