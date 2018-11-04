//console.log('before', process.env);
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const usersRouter = require('./route/users');
//console.log('after', process.env);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users', usersRouter);
// app.get('/', (req, res)=>{
//   res.send('smoke test')
// })


app.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}.`)
});