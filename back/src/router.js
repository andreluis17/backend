import express from 'express'
//  Rotas:

//  feito
import cadastro from './controller/cadastroController.js'
import delet from './controller/deleteController.js'
import alterar from './controller/alterarController.js'
import select from './controller/selectController.js'
import filtro from './controller/filtroController.js'

//  fazendo

//express
 const router = express()

// feito
router.use('/cadastro', cadastro)
router.use('/delete', delet)
router.use('/alterar', alterar) 
router.use('/select', select)
router.use('/filtro', filtro)

// fazendo


 export default router