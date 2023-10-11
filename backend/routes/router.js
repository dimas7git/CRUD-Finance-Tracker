const express = require("express");
const routerApp = express.Router();

const appConta = require("../apps/contas/controller/ctlContas");

routerApp.use((req, res, next) => {

  next(); 
});

routerApp.get("/", (req, res) => {
  res.send("Olá! DIMASSSS");
});

routerApp.get("/getAllContas", appConta.getAllContas);
routerApp.post("/getContasByID", appConta.getContasByID);
routerApp.post("/insertContas", appConta.insertContas);
routerApp.post("/updateContas", appConta.updateContas);
routerApp.post("/deleteContas", appConta.deleteContas);



module.exports = routerApp;