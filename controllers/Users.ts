import express from 'express'
const router = express.Router()
router.get('/',(req:any,res:any)=>{
return res.status(200).json({
    msg:'server is running'
})
})
//module.exports=router
export default router
