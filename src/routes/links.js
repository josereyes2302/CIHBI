const express = require('express');
const router = express.Router();
const pool = require("../database");
const { query } = require('express');

router.get('/index', (req, res) => {
    res.render('links/index');
  });
  
  router.get('/login', (req, res) => {
    res.render('links/login');
  });

  router.get('/registro', (req, res) => {
    res.render('links/registro');
  });
  //registro de usuarios
  router.post('/registro', async(req, res) => {
    const { nombre, appat, apmat, correo, celular, contrasena } = req.body;
    const nuevoUsu = { nombre, appat, apmat, correo, celular, contrasena };
    await pool.query('insert into usuario set ?', [nuevoUsu]);
    res.redirect('/links/login');

  });


router.get('/horas', (req, res) => {
    res.render('links/horas');
  });

router.get('/naive', (req, res) => {
    res.render('links/naive');
  });

router.get('/probabilidad', (req, res) => {
    res.render('links/probabilidad');
  });

  
module.exports = router;