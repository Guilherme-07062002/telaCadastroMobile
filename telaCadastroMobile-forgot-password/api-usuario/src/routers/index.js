const express = require("express");
const { teste, adicionarUsuario, validarUsuario } = require("../controllers/user-controller");
const router = express.Router();

// Testar conexão
router.route("/test").get(teste);

router.route("/user").post(adicionarUsuario);
router.route("/user/login").post(validarUsuario);

module.exports = router;
