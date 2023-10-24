# Trabalho de Desenvolvimento Web III 
Este projeto foi desenvolvido para ser submetido à avaliação na disciplina Desenvolvimento Web III.

A presente aplicação se trata de um CRUD para gerenciar dados financeiros, mais especificamente entrada de receita.

O usuário cadastra o nome do cliente, o valor da transação e a situação (se foi paga na hora ou se o pagamento ficou pendente).

A lógica foi desenvolvida em JavaScript e, para a persistência de dados, o PostgreSQL foi a tecnologia escolhida.

## Requisitos para desenvolvimento do projeto

### Instruções:

- O grupo deverá responder o que se pede neste documento.
- Todos os grupos começam com 03 pontos e vão perdendo, à medida que não implementarem o que se pede, a pontuação indicada na questão.
- O software desenvolvido deverá seguir a arquitetura Cliente-Servidor visto nas aulas da disciplina.
- O grupo deverá criar um repositório no Github e efetuar push de todo o código para ele. Não se esqueça do .gitignore.
- Não poderá ser usado o repositório criado para acompanhar as aulas.
- O aluno poderá criar APIs do Back-End em qualquer linguagem de programação.
- Os dados devem ficar armazenados em um Servidor de Banco de Dados (SGBD).
- Há necessidade de proteger as rotas das APIs com JWT ou outro mecanismo de token semelhante.
- Há necessidade de se fazer login para entrar no sistema.
- O layout do Front-End poderá utilizar o template de administração disponibilizado em sala de aula como poderá implementar o layout do front-end da maneira que achar conveniente.
- O Front-End em hipótese alguma poderá fazer acesso direto ao SGBD.
- Este trabalho não haverá continuação.

## Apresentação do Seminário

### Estudo de caso:

O aluno deverá implementar um conjunto de APIs e interface gráfica para realizar o CRUD referente a uma tabela do módulo financeiro de um sistema ERP. A escolha da tabela ficará a cargo do grupo. Como exemplos têm-se contas a pagar, contas a receber, plano de contas, bancos, agência, conta corrente, etc.

Todas as tabelas deverão ter pelo menos os campos ID, Removido, um campo do tipo texto, um campo do tipo data e um campo do tipo decimal.

## Regras de negócio

Um programador está implementando o módulo de financeiro no sistema ERP de controle de cooperativas. Ele deverá implementar 5 operações de CRUD de acordo com as realizadas em atividades anteriores e vistas em sala de aula.

As operações deverão ser realizadas no formato de APIs e são:

- GetAllXXX: retorna todos os campos da tabela. Vai trazer somente os registros que não foram apagados, isto é, aqueles cujo campo removido seja igual a false.
- GetXXXByID: retorna todos os campos da tabela de acordo com o ID informado. Vai trazer somente o registro que não foi apagado, isto é, aquele cujo campo removido seja igual a false.
- InsertXXX: insere um novo registro na tabela;
- UpdateXXX: atualiza um registro na tabela de acordo com o ID informado;
- DeleteXXX: efetua um soft delete e um registro na tabela de acordo com o ID informado. O registro não é apagado fisicamente, apenas o campo removido é passado para true.

### No front-end:

- Para cada API do back-end deve ser criada uma respectiva função no front-end que usará a API.
- Deverá haver controle de sessão de usuário logado.


## Autores

[Dimas Ferreira](https://github.com/dimas7git)

[Matheus Sass](https://github.com/sassmatheus)

