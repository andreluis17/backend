import db from '../repository/connection.js';

async function delet(smp){

    const sql = 'DELETE FROM viagens WHERE smp = ?';

    const dados = [smp];

    const conn = await db.connect();

    conn.query(sql, dados);
    conn.end();
}
export default {delet};