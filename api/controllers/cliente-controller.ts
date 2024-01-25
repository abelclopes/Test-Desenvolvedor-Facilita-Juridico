import { Request, Response } from 'express';
import { Cliente } from '../models/Cliente';

// Supondo que você tem um clienteService para interagir com o banco de dados
import { clienteService } from '../services/clienteService';
import calcularRota from '../routes/rotaService';


/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID único do Cliente.
 *         nome:
 *           type: string
 *           description: O nome do Cliente.
 *         email:
 *           type: string
 *           description: O email do Cliente.
 *         telefone:
 *           type: string
 *           description: O telefone do Cliente.
 *         coordenada_x:
 *           type: string
 *           description: coordenada x.
 *         coordenada_y:
 *           type: string
 *           description: coordenada y.
 */

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para gerenciar clientes
 */

export default class ClientesController {
    /**
     * @swagger
     * /clientes:
     *   get:
     *     summary: Lista todos os clientes
     *     tags: [Clientes]
     *     responses:
     *       200:
     *         description: Retorna uma lista de clientes
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cliente'
     *       500:
     *         description: Erro interno do servidor
     */
    static async listarClientes(req: Request, res: Response) {
        
        try {
            const clientes = await clienteService.obterTodosClientes();
            res.json(clientes);
        } catch (error: any) {
            res.status(500).send('Internal server error');
        }
    };

    /**
   * @swagger
   * /clientes/{id}:
   *   get:
   *     summary: Obtém um cliente pelo ID
   *     tags: [Clientes]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do cliente
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Cliente encontrado
   *       404:
   *         description: Cliente não encontrado
   *       500:
   *         description: Erro interno do servidor
   */
    static async obterCliente(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const cliente = await clienteService.obterClientePorId(id);
            if (cliente) {
                res.json(cliente);
            } else {
                res.status(404).send('Cliente não encontrado');
            }
        } catch (error: any) {
            res.status(500).send('Internal server error');
        }
    }


    /**
     * @swagger
     * /clientes:
     *   post:
     *     tags: [Clientes]
     *     summary: Adiciona um novo cliente
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cliente'
     *     responses:
     *       201:
     *         description: Cliente criado com sucesso
     *       500:
     *         description: Erro interno do servidor
     */


    static async adicionarCliente(req: Request, res: Response) {
        try {
            const novoCliente = req.body as Cliente;
            const clienteCriado = await clienteService.adicionarCliente(novoCliente);
            res.status(201).json(clienteCriado);
        } catch (error: any) {
            res.status(500).send('Internal server error');
        }
    };
    

    /**
     * @swagger
     * /clientes/{id}:
     *   put:
     *     tags: [Clientes]
     *     summary: Atualiza um cliente existente pelo ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID do cliente
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cliente'
     *     responses:
     *       204:
     *         description: Cliente atualizado com sucesso
     *       404:
     *         description: Cliente não encontrado
     *       500:
     *         description: Erro interno do servidor
     */

    static async atualizarCliente(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const cliente = await clienteService.obterClientePorId(id);
            if(cliente===null) {
                res.status(404).send();
            }else{
                const clienteAtualizado = req.body as Cliente;
                await clienteService.atualizarCliente(id, clienteAtualizado);
                res.status(204).send("Cliente atualizado com sucesso");
            }
        } catch (error: any) {
            res.status(500).send('Internal server error');
        }
    };

    /**
     * @swagger
     * /clientes/{id}:
     *   delete:
     *     tags: [Clientes]
     *     summary: Deleta um cliente pelo ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID do cliente
     *         schema:
     *           type: integer
     *     responses:
     *       204:
     *         description: Cliente deletado com sucesso
     *       404:
     *         description: Cliente não encontrado
     *       500:
     *         description: Erro interno do servidor
     */

    static async deletarCliente(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const cliente = await clienteService.obterClientePorId(id);
            if(cliente===null) {
                res.status(404).send();
            }else{
                await clienteService.deletarCliente(id);
                res.status(204).send("Cliente revovido");
            }
        } catch (error: any) {
            res.status(500).send('Internal server error');
        }
    };


    /**
     * @swagger
     * /clientes/rota:
     *   get:
     *     tags: [Clientes]
     *     summary: Calcula a rota ótima entre os clientes
     *     responses:
     *       200:
     *         description: Retorna a rota ótima
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cliente'
     *       500:
     *         description: Erro interno do servidor
     */

    static async calcularRotaClientes(req: Request, res: Response) {
        try {
            const clientes = await clienteService.obterTodosClientes();
            const rota = calcularRota(clientes);
            res.json(rota);
        } catch (error: any) {
            res.status(500).send('Internal server error');
        }
    };
}