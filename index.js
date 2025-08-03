const express =require('express');
require('dotenv').config()
const app=express();

const port=process.env.PORT;
app.get('/',(req,res)=>
{
  res.send('hello from server');
})

app.get('/pageone',(req,res)=>{
  res.send('hello from page');
})

app.get('/pageone/insta',(req,res)=>
{
  res.send('<h1>hello ronak_bendwal from insta</h1>');
})


app.listen(port,()=>{
  console.log(`server run at port ${port}`)
})