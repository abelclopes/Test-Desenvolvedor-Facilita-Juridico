import { useMutation } from 'react-query';
import { Cliente } from '../models/cliente';

const BASE_URL = import.meta.env.VITE_API_URL || '/';
console.log('BASE_URL',import.meta.env.VITE_API_URL);

// Função para buscar todos os clientes
async function fetchClientes() {
  const response = await fetch(`${BASE_URL}/clientes`);
  if (!response.ok) {
    throw new Error('Erro ao buscar clientes');
  }
  return response.json();
}

// Função para criar um novo cliente
async function createCliente(clienteData: Cliente) {
  const response = await fetch(`${BASE_URL}/clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clienteData),
  });
  if (!response.ok) {
    throw new Error('Erro ao criar cliente');
  }
  return response.json();
}
async function fetchClienteById(id: number) {
    const response = await fetch(`${BASE_URL}/clientes/${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar cliente por ID');
    }
    return response.json();
  }
  
  // Função para atualizar um cliente por ID
  async function updateCliente(id: number, clienteData: Cliente) {
    const response = await fetch(`${BASE_URL}/clientes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteData),
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar cliente');
    }
    return response.json();
  }
  
// Serviço de cliente
export function useClientes() {
 
  // Mutação para criar um novo cliente
  const create = useMutation(createCliente);
  const getAllClientes = async () => {
    try {
      const clientes = await fetchClientes();
      return clientes;
    } catch (error) {
      throw new Error('Erro ao buscar todos os clientes');
    }
  };
  const atualizarCliente = async (id: number, clienteData: Cliente) => {
    try {
      const updatedCliente = await updateCliente(id, clienteData);
      return updatedCliente;
    } catch (error) {
      throw new Error('Erro ao atualizar cliente');
    }
  };
  const getClienteById = async (id: number) => {
    try {
      const cliente = await fetchClienteById(id);
      return cliente;
    } catch (error) {
      throw new Error('Erro ao buscar cliente por ID');
    }
  };
  return {
    create,
    getAllClientes,
    atualizarCliente,
    createCliente: create.mutateAsync,
    getClienteById,
  };
}
