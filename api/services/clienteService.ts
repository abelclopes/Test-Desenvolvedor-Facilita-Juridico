import db from '../db/pool.db';
import { Cliente } from '../models/Cliente';



const obterTodosClientes = async (): Promise<Cliente[]> => {
    console.log('iniciando obterTodosClientes');
    
    try {
        const res = await db.query('SELECT * FROM clientes');
        return res.rows;
    } catch (error:any) {
        console.error('Erro ao obter todos os clientes:', error.message);
        throw error;
    }
};

const obterClientePorId = async (id: number): Promise<Cliente | null> => {
    const res = await db.query('SELECT * FROM clientes WHERE id = $1', [id]);
    return res.rows.length ? res.rows[0] : null;
};

const adicionarCliente = async (cliente: Cliente): Promise<Cliente> => {
    const { nome, email, telefone, coordenada_x, coordenada_y } = cliente;
    const res = await db.query(
        'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome, email, telefone, coordenada_x, coordenada_y]
    );
    return res.rows[0];
};

const atualizarCliente = async (id: number, cliente: Cliente): Promise<void> => {
    const { nome, email, telefone, coordenada_x, coordenada_y } = cliente;
    await db.query(
        'UPDATE clientes SET nome = $1, email = $2, telefone = $3, coordenada_x = $4, coordenada_y = $5 WHERE id = $6',
        [nome, email, telefone, coordenada_x, coordenada_y, id]
    );
};

const deletarCliente = async (id: number): Promise<void> => {
    await db.query('DELETE FROM clientes WHERE id = $1', [id]);
};

export const clienteService = {
    obterTodosClientes,
    obterClientePorId,
    adicionarCliente,
    atualizarCliente,
    deletarCliente,
};
