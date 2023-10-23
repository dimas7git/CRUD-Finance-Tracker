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

routerApp.get("/getAllContas", appConta.getAllContas);
routerApp.post("/getContasByID", appConta.getContasByID);
routerApp.post("/insertContas", appConta.insertContas);
routerApp.post("/updateContas", appConta.updateContas);
routerApp.post("/deleteContas", appConta.deleteContas);

routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;