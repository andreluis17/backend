import express, { response } from 'express'
import db from '../services/filtroServices.js'

const router = express.Router()

router.get('/', async (request, response) => {
    const {smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs} = request.body
    

    try{
        const results = await db.filtro(smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs)
        if(results.length > 0){
            console.log('results controller >>> ', results)

            const result = results[0]

            response.status(200).json({
                smp: result.smp,
                veiculo: result.veiculo,
                motorista: result.motorista,
                telefone: result.telefone,
                f: result.f,
                entrega: result.entrega,
                tecn: result.tecn,
                valor:result.valor,
                isca: result.isca,
                datainicio: result.datainicio,
                datafinal: result.datafinal,
                destino: result.destino,
                status: result.status,
                obs: result.obs

            })} else{
                response.status(404).send('Usuário não cadastrado')
            }
    }catch(err){
        response.status(500).send({mensagem:'erro', err: `${err}`})
    }
})
export default router