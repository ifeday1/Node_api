const express = require('express')
const mongoose = require('mongoose');

const app = express()

//Routes
app.get('/', (req, res) =>{
    res.send("Node app running")
})



mongoose.
connect("mongodb+srv://oladeniifeoluwa123:olawunmi123@ifeapi.ew9rmp5.mongodb.net/ifeAPI?retryWrites=true&w=majority")
.then (() => {
    console.log("CONNECTED")
    app.listen(3000, ()=>{
    console.log("The app is running on port 3000")
})
})
.catch((error) =>{
    console.log(error)
});