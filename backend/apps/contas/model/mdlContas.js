const db = require("../../../database/databaseconfig")

const getAllContas = async () => {
    return (
      await db.query(
        "SELECT *FROM contas WHERE removido = false ORDER BY id ASC;"
      )
    ).rows;
  };
  
  const getContasByID = async (contasID) => {
      return (
        await db.query("SELECT *FROM contas WHERE id = $1;",[contasID])
      ).rows;
    };
  
  
    const insertContas = async (novaConta) => {
      let linhasAfetadas;
      let msg = "ok";
    
      try {
          linhasAfetadas = (
              await db.query("INSERT INTO contas (cliente, valor, status, removido) VALUES ($1, $2, $3, $4) RETURNING id;",
          [
            novaConta.cliente,
            novaConta.valor,
            novaConta.status,
            novaConta.removido,
        ])).rowCount;
      } catch (error) {
        msg = "[mdlContas|insertContas] " + error.detail;
        linhasAfetadas = -1;
      }
  
      return { msg, linhasAfetadas };
    };
  
  
    const updateContas = async (contasREGPar) => {
      let linhasAfetadas;
      let msg = "ok";
      try {
        linhasAfetadas = (
          await db.query(
            "UPDATE contas SET " +
            "cliente = $2, " +
            "valor = $3, " +
            "status = $4, " +
            "removido = $5 " +
            "WHERE id = $1",
            [
                contasREGPar.id,
                contasREGPar.cliente,
                contasREGPar.valor,
                contasREGPar.status,
              contasREGPar.removido,
            ]
          )
        ).rowCount;
      } catch (error) {
        msg = "[mdlContas|UpdateContas] " + error.detail;
        linhasAfetadas = -1;
      }
    
      return { msg, linhasAfetadas };
    };
    
  
    const deleteContas = async (contasREGPar) => {
      let linhasAfetadas;
      let msg = "ok";
      try {
        linhasAfetadas = (
          await db.query(
            "UPDATE contas SET " +
            "removido = true " +
            "WHERE id = $1",
            [contasREGPar.id]
          )
        ).rowCount;
      } catch (error) {
        msg = "[mdlContas|deleteContas] " + error.message;
        linhasAfetadas = -1;
      }
  
      return { msg, linhasAfetadas };
    };
    
    
  
    module.exports = {
        getAllContas,
        getContasByID,
        insertContas,
        updateContas,
        deleteContas
    };