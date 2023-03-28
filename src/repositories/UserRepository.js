const knex = require("../database/knex")

class UserRepository {
  async findByEmail(email) {
    const user = await knex("users").where({ email }).first()

    return user
  }

  async createUser({ name, email, password }) {
    const user = await knex("users").insert({
      name,
      email,
      password,
    })

    return user
  }

  async findById(id) {
    const user = await knex("users").where({ id }).first()

    return user
  }

  async updateUser({ name, email, password, id }) {
    const user = await knex("users").where({ id }).first().update({
      name: name,
      email: email,
      password: password,
      updated_at: knex.fn.now(),
    })

    return user
  }
}

module.exports = UserRepository
