const express = require ('express');

const app = express ();
const path = require ('path');

app.use(express.static(path.join(__dirname,'public')));

app.listen(3000,() => {

console.log('se prendio');

});

app.get ('/',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/home.html'));

});

app.get ('/register',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/register.html'));

});

app.get ('/login',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/login.html'));

});
app.get ('/mercado',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/home.html'));

});

app.get ('/mercado1',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/home.html'));

});
