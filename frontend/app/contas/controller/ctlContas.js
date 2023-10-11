const axios = require("axios");

// Abre a página de listagem de contas
const getAllContas = async (req, res) => {
  try {
    const resp = await axios.get(process.env.SERVIDOR_DW3 + "/getAllContas", {});
    res.render("contas/view_manutencao", {
      title: "Listagem de Contas",
      data: resp.data,
    });
  } catch (erro) {
    console.log("[ctlContas.js|getAllContas] Try Catch: Erro de requisição", erro);
  }
};

// Função para validar campos no formulário
function validateForm(contaForm) {
  // Validar campos se necessário
  return contaForm;
}

// Abre o formulário de cadastro de contas
const insertContas = async (req, res) => {
  try {
    if (req.method === "GET") {
      const registro = {
        cliente: "",
        valor: "0.00",
        status: "",
        removido: false,
      };
      res.render("contas/view_cadContas", {
        title: "Cadastro de Contas",
        data: registro,
      });
    } else {
      const contaREG = validateForm(req.body);
      const resp = await axios.post(
        process.env.SERVIDOR_DW3 + "/insertContas",
        {
          cliente: contaREG.cliente,
          valor: contaREG.valor,
          status: contaREG.status,
          removido: false,
        }
      );

      if (resp.data.status === "ok") {
        res.redirect("/contas");
      } else {
        res.render("contas/view_cadContas", {
          title: "Cadastro de Contas",
          data: contaREG,
        });
      }
    }
  } catch (erro) {
    console.log("[ctlContas.js|insertContas] Try Catch: Erro não identificado", erro);
  }
};

// Abre o formulário de edição de contas
const viewContas = async (req, res) => {
  try {
    if (req.method === "GET") {
      const id = req.params.id;
      const oper = req.params.oper;
      console.log(id);
      parseInt(id);
      const resp = await axios.post(
        process.env.SERVIDOR_DW3 + "/getContaByID",
        {
          id: id,
        }
      );

      if (resp.data.status === "ok") {
        const registro = resp.data.registro[0];
        res.render("contas/view_cadContas", {
          title: "Edição de Conta",
          data: registro,
          oper: oper,
        });
      }
    } else {
      const contaREG = validateForm(req.body);
      const id = parseInt(contaREG.id);
      const resp = await axios.post(
        process.env.SERVIDOR_DW3 + "/updateContas",
        {
          id: id,
          cliente: contaREG.cliente,
          valor: contaREG.valor,
          status: contaREG.status,
          removido: false,
        }
      );

      if (resp.data.status === "ok") {
        res.redirect("/contas");
      } else {
        res.render("contas/view_cadContas", {
          title: "Edição de Conta",
          data: contaREG,
          oper: "edit",
        });
      }
    }
  } catch (erro) {
    console.log("[ctlContas.js|editContas] Try Catch: Erro não identificado", erro);
  }
};

// Exclui uma conta
const deleteContas = async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const resp = await axios.post(
      process.env.SERVIDOR_DW3 + "/deleteContas",
      {
        id: id,
      }
    );

    if (resp.data.status === "ok") {
      res.redirect("/contas");
    } else {
      res.redirect("/contas");
    }
  } catch (erro) {
    console.log("[ctlContas.js|deleteContas] Try Catch: Erro não identificado", erro);
  }
};

module.exports = {
  getAllContas,
  insertContas,
  viewContas,
  deleteContas,
};
