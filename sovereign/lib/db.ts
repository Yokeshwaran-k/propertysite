import mysql, { type Pool } from "mysql2/promise";

declare global {
  var __mysqlPool__: Pool | undefined;
}

function createPool(): Pool {
  return mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 1,
    maxIdle: 1,
    idleTimeout: 60_000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
}

const db = globalThis.__mysqlPool__ ?? createPool();
globalThis.__mysqlPool__ = db;

export default db;
