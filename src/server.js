const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))

// Handle any other request with a 404
app.get('/*', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'static', '404.html'));
})

app.listen(3000, () => console.log('BashCorp Ltd. running on local port 3000'))