import db from "../repository/connection.js"

async function alterar(smp, veiculo, motorista, telefone,f,ag,au,entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs,id){

  const sql = 'UPDATE tbl_viagens SET smp = ?, veiculo = ?, motorista = ?, telefone = ?, f = ? , ag = ?, au = ?, entrega = ?, tecn = ?, valor = ?, isca = ?, datainicio = ? , datafinal = ?, destino = ?, status = ?, obs = ? WHERE id_viagem = ?';

  const dados = [smp, veiculo, motorista, telefone,f,ag,au,entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs,id]
  console.log(dados)

  const conn = await db.connect();

  conn.query(sql, dados); 

  conn.end(); 
}
export default {alterar};