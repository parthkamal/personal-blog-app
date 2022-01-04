// initialising the express server
const express = require('express');
const app = express();

//using the ejs template engine for ssr
app.set('view engine','ejs');

//app middlewares


//using views folder to access ejs files before rendering
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));


//apis 
app.get('/',(req,res)=>{
    res.render('pages/home');
})


//setting port of the server
app.listen(8080,()=>{
    console.log('server listening at port 8080');
})


