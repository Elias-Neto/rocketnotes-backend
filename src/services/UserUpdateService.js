const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")

class UserUpdateService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute({ name, email, password, old_password, id }) {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new AppError("Usuário não encontrado!")
    }

    if (email) {
      const userWidthUpdateEmail = await this.userRepository.findByEmail(email)

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

      password = await hash(password, 8)
    }

    const userUpdated = await this.userRepository.updateUser({
      name,
      email,
      password,
      id,
    })

    return userUpdated
  }
}

module.exports = UserUpdateService
