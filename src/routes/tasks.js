const express = require('express')

const router = new express.Router()

router.post('/tasks',(req,res) =>{
    console.log(req.body)
    res.status(201).send()
})

router.get('/tasks',(req, res) =>{
    
    res.status(200).send(users)
})

router.get('/tasks/:id',(req,res) =>{
    console.log(req.params.id)
    
    res.status(200).send()
})
router.patch('/tasks/:id', (req,res) =>{
    res.send()
})
router.delete('/tasks/:id',(req,res)=>{
    res.send()
})
module.exports = router 