import { Pool } from 'pg';
const databaseHost = process.env.DB_HOST || 'dbpostgres';
console.log('Dados Conexao', JSON.stringify(databaseHost))
console.log('Dados Conexao', JSON.stringify(process.env.DB_DATABASE))
console.log('Dados Conexao', JSON.stringify(process.env.DB_PORT))
const db = new Pool({
    host: databaseHost,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT || "5432")
});
try {
    db.connect(); 
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  } catch (error:any) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); 
  }

export default db;
