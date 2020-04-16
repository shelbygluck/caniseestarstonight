const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname)))
app.use("/styles", express.static(__dirname))
app.use("/images", express.static(__dirname + '/app'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.PORT || 8080);