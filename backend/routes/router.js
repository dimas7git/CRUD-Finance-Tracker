const express = require("express");
const routerApp = express.Router();

const appConta = require("../apps/contas/controller/ctlContas");
const appLogin = require("../apps/login/controller/ctlLogin");

routerApp.use((req, res, next) => {

  next(); 
});

routerApp.get("/", (req, res) => {
  res.send("Olá!");
});

routerApp.get("/getAllContas", appLogin.AutenticaJWT,appConta.getAllContas);
routerApp.post("/getContasByID", appLogin.AutenticaJWT, appConta.getContasByID);
routerApp.post("/insertContas", appLogin.AutenticaJWT, appConta.insertContas);
routerApp.post("/updateContas", appLogin.AutenticaJWT, appConta.updateContas);
routerApp.post("/deleteContas", appLogin.AutenticaJWT, appConta.deleteContas);

routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;