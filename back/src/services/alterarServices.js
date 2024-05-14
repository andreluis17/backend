import db from '../repository/connection.js'

async function alterar(smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs){

    const conn = 'UPDATE tbl_viagem SET smp = ?, veiculo = ?, motorista = ?, telefone = ?, f = ? , entrega = ?, tecn = ?, valor = ?, isca = ?, datainicio = ? , datafinal = ?, destino = ?, status = ?, obs = ? WHERE id = ?';

    const dados = [smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs]
  
    const sql = await database.connect();

    sql.query(conn, dados); 
    sql.end(); 
  }
export default {alterar};