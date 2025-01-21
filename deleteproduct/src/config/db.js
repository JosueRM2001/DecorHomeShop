import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // Cambia si usas un host diferente
  port: 3307,
  user: 'root', // Tu usuario de MySQL
  password: '12345678', // Tu contraseña de MySQL
  database: 'productcatalog', // Nombre de la base de datos
});

export default pool;