import { Pool } from 'pg';

const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT || "5432")
});
try {
    db.connect(); // Use um método de conexão síncrona se disponível
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  } catch (error:any) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerre o aplicativo em caso de erro de conexão
  }

export default db;
