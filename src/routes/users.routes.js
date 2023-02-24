const { Router } = require("express")
const UsersController = require("../controllers/UsersController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const multer = require("multer")
const uploadConfig = require("../configs/upload")
const UserAvatarController = require("../controllers/UserAvatarController")

const userRoutes = Router()
const usersController = new UsersController()
const upload = multer(uploadConfig.MULTER)
const userAvatarController = new UserAvatarController()

userRoutes.post("/", usersController.create)
userRoutes.put("/", ensureAuthentication, usersController.update)
userRoutes.patch(
  "/avatar",
  ensureAuthentication,
  upload.single("avatar"),
  userAvatarController.update
)

module.exports = userRoutes
