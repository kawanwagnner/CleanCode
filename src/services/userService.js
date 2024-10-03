const User = require("../model/userW");

const userService = {
  create: async (user) => {
    try {
      return await User.create(user);
    } catch (error) {
      throw new Error("Ocorreu um erro ao Criar o USer");
    }
  },
  update: async (id, userToUpdate) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      await user.update(userToUpdate);
    } catch {
      throw new Error("Ocorreu um erro ao Atualizar User");
    }
  },
  getById: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar único User");
    }
  },
  getAll: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      await user.deploy();
      return user;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar o User");
    }
  },
};
