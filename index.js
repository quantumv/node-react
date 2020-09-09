// Root file --Imports--
const express = require('express')
const app = express()

// route
app.get('/', (req, res) => {
    res.send({ hi: 'Q' })
})

//listener
const PORT = process.env.PORT || 5000
app.listen(5000)
