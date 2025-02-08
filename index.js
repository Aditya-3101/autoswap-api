const express = require('express')
const app = express()
const port = process.env.PORT || 8080; //  choose port from here like 8080, 3001
const data = require('./db.json')
const cors = require('cors')

app.use(cors())

const {cars,allCars} = data

app.use('/allCars',(req,res)=>{
    res.json(allCars)
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});
