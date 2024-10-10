const userService = require("../services/userService");

const userController = {
  create: async (req, res) => {
    try {
      const user = await userService.create(req.body);
      return res.status(200).json({
        msg: "User criado com sucesso!!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao tentar criar o user",
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await userService.update(req.params.id, req.body);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado...",
        });
      }
      return res.status(200).json({
        msg: "User atualizado com sucesso!!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atulizar o User",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await userService.getAll();
      return res.status(200).json({
        msg: "Todos os usuários",
        users,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no Server",
      });
    }
  },
};

module.exports = userController;
