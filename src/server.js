const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname)))

// Handle any other request with a 404
app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3000)