import db from '../repository/connection.js';

async function filtro(smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs){
    const sql = 'SELECT * from tbl_viagens WHERE smp = ? or veiculo = ? motorista or telefone = ? or f = ? or entrega = ? or tecn = ? or valor = ? or isca = ? or datainicio = ? or datafinal = ? or destino = ? or status = ? or obs = ?'

    const dados = (smp, veiculo, motorista, telefone, f, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs)

    const conn = await database.connect();
    const [rows] = await conn.query(sql,dados)
    conn.end();

    return rows
}

export default {filtro};