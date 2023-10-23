const axios = require("axios");

//@ Abre o formulário de manutenção de contas
const getAllContas = (req, res) =>
  (async () => {
    userName = req.session.userName;
    try {
      resp = await axios.get(process.env.SERVIDOR_DW3 + "/GetAllContas", {});
      //console.log("[ctlLogin.js] Valor resp:", resp.data);
      res.render("contas/view_manutencao", {
        title: "Manutenção de contas",
        data: resp.data,
        userName: userName,
      });
    } catch (erro) {
      console.log("[ctlCursos.js|getAllCursos] Try Catch: Erro de requisição");
    }
  })();

//@ Abre formulário de cadastro de contas
const openContasInsert = (req, res) =>
  (async () => {
    var oper = "";
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        oper = "c";
        res.render("contas/view_cadContas", {
          title: "Cadastro de contas",
          oper: oper,
          userName: userName,
        });
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|insertAlunos] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

//@ Função para validar campos no formulário
function validateForm(regFormPar) {
  if (regFormPar.id == "") {
    regFormPar.id = 10;
  } else {
    regFormPar.id = parseInt(regFormPar.id);
  }

  regFormPar.deleted = regFormPar.deleted === "true"; //converte para true ou false um check componet

  return regFormPar;
}

//@ Abre formulário de cadastro de contas
const openContasUpdate = (req, res) =>
  (async () => {
    var oper = "";
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        oper = "u";
        const id = req.params.id;
        parseInt(id);
        res.render("contas/viewContas", {
          title: "Cadastro de contas",
          oper: oper,
          idBusca: id,
          userName: userName,
        });
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|insertAlunos] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

//@ Recupera os dados das contas
const getDados = (req, res) =>
  (async () => {
    const idBusca = req.body.id;
    console.log("AQUI ESTA",idBusca);
    parseInt(idBusca);
    console.log("[ctlCursos.js|getDados] valor id :", idBusca);
    try {
      resp = await axios.post(
        process.env.SERVIDOR_DW3 + "/getContasByID",
        {
          id: idBusca,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (resp.data.status == "ok") {
        res.json({ status: "ok", registro: resp.data.registro[0] });
      }
    } catch (error) {
      console.log(
        "[ctlCursos.js|getDados] Try Catch: ERROOOOOOOOOOOOOOOo" ,error    );
    }
  })();

//@ Realiza inserção de contas
const insertContas = (req, res) =>
  (async () => {
    token = req.session.token;
    try {
      console.log(req.method)
      if (req.method == "POST") {
        const regPost = validateForm(req.body);
        console.log(process.env.SERVIDOR_DW3)
        regPost.id = 0;
        const resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/insertContas",
          regPost,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(resp)
        if (resp.data.status == "ok") {
          res.json({ status: "ok", mensagem: "Conta inserida com sucesso!" });
        } else {
          res.json({ status: "erro", mensagem: "Erro ao inserir conta!" });
        }
      }
    } catch (erro) {
      console.log(
        "[ctlContas.js|insertContas] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

//@ Realiza atualização de contas
const updateContas = (req, res) =>
  (async () => {
    token = req.session.token;
    try {
      if (req.method == "POST") {
        const regPost = validateForm(req.body);
        const resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/UpdateContas",
          regPost,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (resp.data.status == "ok") {
          res.json({ status: "ok", mensagem: "Conta atualizada com sucesso!" });
        } else {
          console.log(resp)
          res.json({ status: "erro", mensagem: "Erro ao atualizar conta!" });
        }
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|updateCursos] Try Catch: Erro não identificado.",
        erro
      );
    }
  })();

//@ Realiza remoção soft de contas
const deleteContas = (req, res) =>
  (async () => {
    token = req.session.token;
    try {
      if (req.method == "POST") {
        const regPost = validateForm(req.body);
        regPost.id = parseInt(regPost.id);
        const resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/DeleteContas",
          {
            id: regPost.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (resp.data.status == "ok") {
          res.json({ status: "ok", mensagem: "Conta removida com sucesso!" });
        } else {
          res.json({ status: "erro", mensagem: "Erro ao remover conta!" });
        }
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|deleteCursos] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

module.exports = {
  getAllContas,
  openContasInsert,
  openContasUpdate,
  getDados,
  insertContas,
  updateContas,
  deleteContas,
};
