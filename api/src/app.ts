// app.js

import express from 'express';
const cors = require('cors');
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig';
dotenv.config();
import ClientesController from '../controllers/cliente-controller';

const app = express();
app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota para listar todos os clientes
app.get('/clientes', ClientesController.listarClientes);

// Rota para obter um cliente por ID
app.get('/clientes/:id', ClientesController.obterCliente);

// Rota para adicionar um novo cliente
app.post('/clientes', ClientesController.adicionarCliente);

// Rota para atualizar um cliente existente
app.put('/clientes/:id', ClientesController.atualizarCliente);

// Rota para deletar um cliente
app.delete('/clientes/:id', ClientesController.deletarCliente);

// ...

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
