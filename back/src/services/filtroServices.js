import db from '../repository/connection.js';

async function filtro(smp, veiculo, motorista, telefone, f, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs) {
    const sql = 'SELECT * FROM tbl_viagens WHERE smp = ? OR veiculo = ? OR motorista = ? OR telefone = ? OR f = ? OR entrega = ? OR tecn = ? OR valor = ? OR isca = ? OR datainicio = ? OR datafinal = ? OR destino = ? OR status = ? OR obs = ?';

    const dados = [smp, veiculo, motorista, telefone, f, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs];
    

    const conn = await db.connect();
    const [rows] = await conn.query(sql, dados);
    conn.end();

    return rows;
}

export default { filtro };