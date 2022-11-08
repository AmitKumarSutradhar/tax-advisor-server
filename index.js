const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

// MiddleWate 
app.use(express())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Tax Advisor Server!')
})

app.listen(port, () => {
    console.log(`Tax Advisor Server app listening on port ${port}`)
})