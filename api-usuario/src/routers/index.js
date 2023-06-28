const express = require("express");
const { teste, adicionarUsuario } = require("../controllers/user-controller");
const router = express.Router();

// Testar conexão
router.route("/test").get(teste);

router.route("/user").post(adicionarUsuario);

module.exports = router;
