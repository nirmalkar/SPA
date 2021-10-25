const express = require('express')
const path = require('path')
const app = express()

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('FE', 'index.html'))
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running at the port ${port}`)
})
