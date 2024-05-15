import express from 'express'
//  Rotas:

//  feito
import cadastro from './controller/cadastroController.js'
import select from './controller/selectController.js'

//  fazendo
import filtro from './controller/filtroController.js'
import delet from './controller/deleteController.js'
import alterar from './controller/alterarController.js'

//express
 const router = express()

// feito
router.use('/cadastro', cadastro) 
router.use('/select', select)


// fazendo
router.use('/filtro', filtro)
router.use('/delet', delet)
router.use('/alterar', alterar)

 export default router