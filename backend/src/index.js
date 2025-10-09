import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.POSTGRES_USER || 'admin'}:${process.env.POSTGRES_PASSWORD || 'admin123'}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 5432}/${process.env.POSTGRES_DB || 'appdb'}`
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as now');
    res.send(`Banco conectado! Hora do servidor: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao consultar o banco: ' + err.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
