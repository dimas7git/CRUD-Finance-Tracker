var express = require('express');
var contasApp = require("../app/contas/controller/ctlContas")

////var login = require("../controllers/login/login")
var router = express.Router();
//const passport = require('passport');



//Função necessária para evitar que usuários não autenticados acessem o sistema.
function authenticationMiddleware(req, res, next) {
    // Verificar se existe uma sessão válida.
    isLogged = req.session.isLogged;    
  
    if (!isLogged) {      
      res.redirect("/Login");
    }
    next();
}; 
  
/* GET métodos */
router.get('/', authenticationMiddleware, contasApp.getAllContas);
router.get('/insertContas', authenticationMiddleware, contasApp.insertContas);
router.get('/viewContas/:id/:oper', authenticationMiddleware, contasApp.viewContas);

/* POST métodos */
router.post('/insertContas', authenticationMiddleware, contasApp.insertContas);
router.post('/deleteContas', authenticationMiddleware, contasApp.deleteContas);
router.post('/viewContas', authenticationMiddleware, contasApp.viewContas);


module.exports = router;
