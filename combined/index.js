const hello = require('./returnHello.js');

const express = require('express')
const app = express()

app.get('/:lang', (req, res) => {
  try {
    var text = hello.generateHelloString(req.params.lang)
  } catch (err) {
    var text = "Unrecognized language."
  }

  res.send(text);
})

app.listen(8000)

