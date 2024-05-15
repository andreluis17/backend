import express from 'express'
import db from '../services/alterarServices.js'

const router = express.Router()

router.put('/', async (request, response) => {
    const {smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs} = request.body

    try{
        await db.alterar(smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs)
    } catch {
        return((response.status(500).send("Error")))
    }

})
export default router
