import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Exemplo',
            version: '1.0.0',
            description: 'Esta é uma API de exemplo',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./controllers/*.ts'],
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;