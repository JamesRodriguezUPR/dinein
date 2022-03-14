const express = require('express')
const req = require('express/lib/request')
const reouter = express.Router()
//since js goes from top to bottom always put your static addresses first
reouter.get('/', (req,res)=>{console.log('yes')})
reouter.get('/:paramName',(req,res)=>{
    res.send(req.params.paramName)
})
// if you have a rute that will have multiple requests, you can chain them
/*
lets say you have :
router.get(route)
router.post(route)
router.delete(route)
you can use:
router.route(route).get().post.delete()
*/
 // this is a middleware, it will run everytime the paramName in
// the route is used
reouter.param("paramName", (req,res,next,paramName)=>{
    console.log('yes you did');
    next() // next is used when using middleware
})// 30.35
module.exports = reouter