const AppError = require("../utils/AppError")
const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const UserUpdateService = require("./UserUpdateService")

describe("UserCreateService", () => {
  let userCreateService
  let userRepositoryInMemory

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    userCreateService = new UserCreateService(userRepositoryInMemory)
    userUpdateService = new UserUpdateService(userRepositoryInMemory)
  })

  it("user should be update", async () => {
    const user = {
      name: "User Test",
      email: "user@teste.com",
      password: "123",
    }

    const { id: user_id } = await userCreateService.execute(user)

    let userUpdated = {
      name: "User Test Updated",
      email: "user@teste.com",
      password: "1234",
      old_password: "123",
      id: user_id,
    }

    userUpdated = await userUpdateService.execute(userUpdated)

    expect(userUpdated).toHaveProperty("id")
  })

  it("user not should be update because he not exists", async () => {
    let userUpdated = {
      name: "User Test Updated",
      email: "user@teste.com",
      password: "1234",
      old_password: "123",
      id: 1,
    }

    userUpdated = await await expect(
      userUpdateService.execute(userUpdated)
    ).rejects.toEqual(new AppError("Usuário não encontrado!"))
  })

  it("user not should be update because email already exists", async () => {
    const user = {
      name: "User Test",
      email: "user@teste.com",
      password: "123",
    }

    const { id: user_id } = await userCreateService.execute(user)

    const user1 = {
      name: "User Test 1",
      email: "user1@teste.com",
      password: "123",
    }

    await userCreateService.execute(user1)

    let userUpdated = {
      name: "User Test Updated",
      email: "user1@teste.com",
      password: "1234",
      old_password: "123",
      id: user_id,
    }

    await expect(userUpdateService.execute(userUpdated)).rejects.toEqual(
      new AppError("Este e-mail já está em uso!")
    )
  })

  it("user not should be update because old_password was not informed", async () => {
    const user = {
      name: "User Test",
      email: "user@teste.com",
      password: "123",
    }

    const { id: user_id } = await userCreateService.execute(user)

    let userUpdated = {
      name: "User Test Updated",
      email: "user@teste.com",
      password: "1234",
      id: user_id,
    }

    await expect(userUpdateService.execute(userUpdated)).rejects.toEqual(
      new AppError("Informe a senha antiga!")
    )
  })

  it("user not should be update because old_password is not correct", async () => {
    const user = {
      name: "User Test",
      email: "user@teste.com",
      password: "123",
    }

    const { id: user_id } = await userCreateService.execute(user)

    let userUpdated = {
      name: "User Test Updated",
      email: "user@teste.com",
      password: "1234",
      old_password: "111",
      id: user_id,
    }

    await expect(userUpdateService.execute(userUpdated)).rejects.toEqual(
      new AppError("Senha antiga não confere!")
    )
  })
})
