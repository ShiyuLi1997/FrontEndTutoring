const express = require('express')
const router = express.Router()


// get all users
router.get('/', (req,res)=>{
    res.send("hello world")
})
// // get all songs
// router.get('/', (req,res)=>{
    
// })
// // get one song
// router.get('/', (req,res)=>{
    
// })
// // get one user
// router.get('/', (req,res)=>{
    
// })
// register
// router.post('/', (req,res)=>{
    
// })
// // update one
// router.patch('/', (req,res)=>{
    
// })
// // delete one
// router.delete('/:id', (req,res)=>{
    
// })

module.exports = router