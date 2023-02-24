const AppError = require("../utils/AppError")
const { hash, compare } = require("bcryptjs")
const knex = require("../database/knex")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUserExists = await knex("users").where({ email }).first()

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso!")
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    })

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const id = request.user.id

    const user = await knex("users").where({ id }).first()

    if (!user) {
      throw new AppError("Usuário não encontrado!")
    }

    if (email) {
      const userWidthUpdateEmail = await knex("users").where({ email }).first()

      if (userWidthUpdateEmail && userWidthUpdateEmail.id !== user.id) {
        throw new AppError("Este e-mail já está em uso!")
      }
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError("Informe a senha antiga!")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("Senha antiga não confere!")
      }

      user.password = await hash(password, 8)
    }

    await knex("users").where({ id }).first().update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.fn.now(),
    })

    return response.json()
  }
}

module.exports = UsersController
