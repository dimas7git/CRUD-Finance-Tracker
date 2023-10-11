const mdlConta = require("../model/mdlContas")

const getAllContas = (req, res) =>
(async () =>{
    let registro = await mdlConta.getAllContas();
    res.json({status: "ok", registro: registro});
})();


const getContasByID = (req, res) =>
(async () =>{
    const contaID = parseInt(req.body.id);
    let registro = await mdlConta.getContasByID(contaID);
    res.json({ status: "ok", "registro": registro });
})();

const insertContas = (request, res) =>
  (async () => {
    
    const contaREG = request.body;
    
    let { msg, linhasAfetadas } = await mdlConta.insertContas(contaREG);

    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  const updateContas = (request, res) =>
  (async () => {
    const contaREG = request.body;
    let  { msg, linhasAfetadas } = await mdlConta.updateContas(contaREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();
  
  const deleteContas = (request, res) =>
  (async () => {
    const contaREG = request.body;
    let { msg, linhasAfetadas } = await mdlConta.deleteContas(contaREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  module.exports = {
    getAllContas,
    getContasByID,
    insertContas,
    updateContas,
    deleteContas
  };
  