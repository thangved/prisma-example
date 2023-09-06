const { PrismaClient } = require("@prisma/client");

class UserService {
  #client;
  constructor() {
    this.#client = new PrismaClient();
  }

  async create(user) {
    const newUser = await this.#client.user.create({
      data: user,
    });

    return newUser;
  }

  async getAll(query) {
    const where = {};

    if (query.gender) {
      where.gender = query.gender;
    }

    const users = await this.#client.user.findMany({
      where: where,
    });

    return users;
  }

  async getById(id) {
    const user = await this.#client.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return user;
  }
}

module.exports = new UserService();
