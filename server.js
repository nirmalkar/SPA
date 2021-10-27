const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()

app.use('/static', express.static(path.resolve(__dirname, 'FE', 'static')))

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'FE', 'index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running at the port ${port}`)
})
