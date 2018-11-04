console.log('before', process.env);
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
console.log('after', process.env);
app.get('/', (req, res)=>{
  res.send('smoke test')
})


app.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}.`)
})