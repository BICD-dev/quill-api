import express from 'express'

const app = express();

const port = 3000; //define port for the server entry point

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})