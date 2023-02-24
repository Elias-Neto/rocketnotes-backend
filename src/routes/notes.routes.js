const { Router } = require("express")
const NotesController = require("../controllers/NotesController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")

const noteRoutes = Router()
const notesController = new NotesController()

noteRoutes.use(ensureAuthentication)

noteRoutes.post("/", notesController.create)
noteRoutes.get("/:id", notesController.show)
noteRoutes.delete("/:id", notesController.delete)
noteRoutes.get("/", notesController.index)

module.exports = noteRoutes
