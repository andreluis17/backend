import express from 'express'
import db from '../services/deleteServices.js'

const router = express.Router()

router.delete('/', async (request, response) => {
    const {smp} = request.body
    
    try{
         await db.delet(smp);
    }catch{
        return((response.status(500).send("Error")))
    }
})

export default router