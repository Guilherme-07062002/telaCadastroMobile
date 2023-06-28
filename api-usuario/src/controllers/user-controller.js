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
      const { name, email, password } = request.body;

      if (!name || !email || !password) {
        response
          .status(400)
          .json("É necessário informar todos os campos do usuário.");
      } else {
        User.create({
          name: name,
          email: email,
          password: password
        });

        return response.status(200).json("Usuário registrado.");
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
