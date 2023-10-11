const db = require("../../../database/databaseconfig");

const GetCredencial = async (loginPar) => {
  return (
    await db.query(
      "select username, password " +
        "from usuarios where username = $1 and deleted = false",
      [loginPar]
    )
  ).rows;
};

module.exports = {
  GetCredencial,
};
