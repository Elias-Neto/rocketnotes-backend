const knex = require("../database/knex")

class UserRepository {
  async findByEmail(email) {
    const checkUserExists = await knex("users").where({ email }).first()

    return checkUserExists
  }

  async createUser({ name, email, password }) {
    const user = await knex("users").insert({
      name,
      email,
      password,
    })

    return user
  }
}

module.exports = UserRepository
