import express from 'express'
const router =express.Router()
import users from '../controllers/Users'
router.use('/users',users)
export default router;