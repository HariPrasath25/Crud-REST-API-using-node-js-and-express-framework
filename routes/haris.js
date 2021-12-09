const express = require('express');
// const { addListener } = require('../models/hari');
const router = express.Router()
const Hari = require('../models/hari')
router.get('/',async(req,res)=>{
try{ 
    const projects = await Hari.find()
    res.json(projects)
}catch(err){
    res.send('error'+err);
}
})
router.get('/:id',async(req,res)=>{
    try{ 
        const project = await Hari.findById(req.params.id)
        res.json(project)
    }catch(err){
        res.send('error'+err);
    }
    })

router.post('/',async(req,res)=>{
    const val = new Hari({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
        const data = await val.save()
        res.json(data)

    }catch(err){
        res.send('error')
    }
})
//patch is use for less data
router.patch('/:id',async(req,res)=>{

    
    try{
        const val = await Hari.findById(req.params.id)
        val.sub=req.body.sub;
        const data = await val.save()
        res.json(data)

    }catch(err){
        res.send('error')
    }
})

module.exports = router