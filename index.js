// Root file --Imports--
const express = require('express')
const app = express()

// route
app.get('/', (req, res) => {
    res.send({ hi: 'Q' })
})

//listener
app.listen(5000)
