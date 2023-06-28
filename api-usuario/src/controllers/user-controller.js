const User = require("../models/user");

module.exports = {
  async teste(request, response) {
    try {
      return response.status(200).json("Deu certo.");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async adicionarUsuario(request, response) {
    try {
      const { nome, email } = request.body;

      if (!nome || !email) {
        response
          .status(400)
          .json("É necessário informar nome e email do usuário.");
      } else {
        User.create({
          nome: nome,
          email: email,
        });

        return response.status(200).json("Usuário registrado.");
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
