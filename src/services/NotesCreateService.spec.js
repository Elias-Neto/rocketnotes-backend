const AppError = require("../utils/AppError")
const NotesCreateService = require("./NotesCreateService")
const NotesRepositoryInMemory = require("../repositories/NotesRepositoryInMemory")

describe("NoteCreateService", () => {
  let notesCreateService
  let notesRepositoryInMemory

  beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory()
    notesCreateService = new NotesCreateService(notesRepositoryInMemory)
  })

  it("note should be create", async () => {
    const note = {
      title: "Título de Exemplo",
      description: "Essa é uma nota de exemplo.",
      tags: ["tag1", "tag2"],
      links: ["link1", "link2"],
    }

    const user_id = Math.floor(Math.random() * 1000) + 1

    const noteCreated = await notesCreateService.execute({ ...note, user_id })

    expect(noteCreated).toHaveProperty("note_id")
    expect(noteCreated).toHaveProperty("lastTagAdded_id")
    expect(noteCreated).toHaveProperty("lastLinkAdded_id")
  })
})
