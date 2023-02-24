const { Router } = require("express")
const TagsController = require("../controllers/TagsController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")

const tagRoutes = Router()
const tagsController = new TagsController()

tagRoutes.get("/", ensureAuthentication, tagsController.index)

module.exports = tagRoutes
