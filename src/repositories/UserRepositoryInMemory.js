class UserRepositoryInMemory {
  users = []

  async findByEmail(email) {
    const checkUserExists = this.users.find((user) => user.email === email)

    return checkUserExists
  }

  async createUser({ name, email, password }) {
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      email,
      name,
      password,
    }

    this.users.push(user)

    return user
  }
}

module.exports = UserRepositoryInMemory
