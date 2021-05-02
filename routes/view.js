const express = require('express');
//route bsh ta3mlelna route wa7dou w ba3ed heka bsh nedyouh fil main
const router = express.Router()
const path = require('path')
// path.join bsh tekhou path mou3ayen w tlas9ou m3a loukhrin 

//routes
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home.html'));
})
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','contact.html'));
})
router.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','services.html'));
})
//ki tjik get request 3al path css hedhya bsh traja3li fichier css eli 7ashti beha!
//router.get('/css/style.css',(req,res)=>{
//    res.sendFile(__dirname + '/public/css/style.css');
//})
module.exports = router