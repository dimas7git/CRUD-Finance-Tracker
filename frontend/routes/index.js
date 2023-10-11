// Arquivo routes/index.js
var express = require('express');
var loginApp = require("../app/login/controller/ctlLogin")
var router = express.Router();
//Função necessária para evitar que usuários não autenticados acessem o sistema.
function authenticationMiddleware(req, res, next) {
 // Verifica se existe uma sessão válida.
 isLogged = req.session.isLogged;
 if (!isLogged) {
 res.redirect("/Login");
 }
 next();
};

/* GET home page. */
router.get('/', authenticationMiddleware, function (req, res, next) {
  userName = req.session.userName;
  res.render('index', { "title": 'Página principal', "local": "IFSP", "userName": userName});
 });

 /* GET login page. */
 router.get('/Login', loginApp.Login);

 /* POST login page. */
 router.post('/Login',loginApp.Login);

 /* GET logout page. */
 router.get('/Logout', loginApp.Logout);

 module.exports = router;
 