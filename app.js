const express = require('express') // returns a function
const app = express() // returns a object

const workshops = [
    {id: 1, name: 'Workshop1'},
    {id: 2, name: 'Workshop2'},
    {id: 3, name: 'Workshop3'}
]

app.get('/api/workshops', (req , res) => {
    res.send(workshops)
})
/*
app.get('/api/workshop1', (req , res) => {
    res.send(workshop[0])
})
app.get('/api/workshop2', (req , res) => {
    res.send(workshop[1])
})
app.get('/api/workshop3', (req , res) => {
    res.send(workshop[2])
})
*/
app.get('/api/workshops/:id', (req , res) => {
 const workshop = workshops.find(w => w.id === parseInt(req.params.id))
 if(!workshop) return res.status(404).send('Requested workshop not found!!')
    res.send(workshop)
})

app.listen(3000, () => {console.log("Server running at port 3000......")} )