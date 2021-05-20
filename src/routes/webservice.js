const express = require('express');
const router = express.Router();
const pool = require("../database");

 router.get('/', async(req, res) => {
   const usuario = await pool.query('select * from usuario');
   res.json(usuario);
});

 router.get('/:user', async(req, res) => {
   const { user } = req.params;
   const usuario = await pool.query('select Id_usuario,nombre, SHA1(CONCAT("CIHEGD",nombre,contrasena)) AS HASH from usuario where nombre=?', [user]);
   res.json(usuario);
 });

 
module.exports = router;