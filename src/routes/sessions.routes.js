const { Router } = require("express")
const SessionsController = require("../controllers/SessionsController")

const sessionRoutes = Router()
const sessionsController = new SessionsController()

sessionRoutes.post("/", sessionsController.create)

module.exports = sessionRoutes
