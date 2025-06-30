const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.listen(3000,()=>{
    console.log("Sivaprakasam T")
});
mongoose.connect('mongodb+srv://tamilmanisivaprakasam5:LEGEND%402005@cluster07.iowpaeh.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster07')
  .then(() => {console.log('Connected!')})
  .catch(()=>{
    console.log("Connection failed");
  });
app.get('/',(req,res)=>{
    res.send("Welcome Sivaprakasam")
});