const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json()); 

//Import Routes
const postsRoute = require('./routes/posts');


//connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }
,()=> console.log('Connect Successfully!'));

//ROUTES
app.get('/',(req,res) =>{
    res.send("We are on HomePage");
});
app.use('/posts',postsRoute);

//Listening server
app.listen(3000,()=>console.log("App is running"));