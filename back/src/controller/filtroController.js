import express, { response } from 'express'
import db from '../services/filtroServices.js'

const router = express.Router()

router.post('/', async (request, response) => {
    const {smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs} = request.body

    try{
        await db.filtro(smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs)
        if(filtro.length > 0){
            console.log('results controller >>> ', results)

            response.status(200).json({smp: results.smp,
                veiculo: results.veiculo,
                motorista: results.motorista,
                telefone: results.telefone,
                f: results.f,
                entrega: results.entrega,
                tecn: results.tecn,
                valor:results.valor,
                isca: results.isca,
                datainicio: results.datainicio,
                datafinal: results.datafinal,
                destino: results.destino,
                status: results.status,
                obs: results.obs

            })} else{
                response.status(404).send('Usuário não cadastrado')
            }
    }catch{
        response.status(500).send({mensagem:'erro', erro: `${error}`})
    }
})
export default router