const { Router } = require("express");

const router = Router();

router.post("/"); // Criar

router.put("/:id"); // Editar

router.delete("/:id"); // Deletar

router.get("/:id"); // Buscar Unicamente

router.get("/"); // Buscar Todo

module.exports = router;
