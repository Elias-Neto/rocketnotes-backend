class NotesCreateService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository
  }

  async execute({ title, description, tags, links, user_id }) {
    const note_id = await this.notesRepository.createNote({
      title,
      description,
      user_id,
    })

    let lastTagAdded_id
    if (tags.length !== 0) {
      const tagsInsert = tags.map((name) => {
        return {
          note_id: Number(note_id),
          name,
          user_id,
        }
      })

      lastTagAdded_id = await this.notesRepository.createTags(tagsInsert)
    }

    let lastLinkAdded_id
    if (links.length !== 0) {
      const linksInsert = links.map((url) => {
        return {
          note_id: Number(note_id),
          url,
        }
      })

      lastLinkAdded_id = await this.notesRepository.createLinks(linksInsert)
    }

    return {
      note_id,
      lastTagAdded_id,
      lastLinkAdded_id,
    }
  }
}

module.exports = NotesCreateService
