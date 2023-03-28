class NotesRepositoryInMemory {
  notes = []
  tags = []
  links = []

  async createNote({ title, description, user_id }) {
    const note = {
      id: Math.floor(Math.random() * 1000) + 1,
      title,
      description,
      user_id,
    }

    this.notes.push(note)

    return note.id
  }

  async createTags(noteTags) {
    this.tags = noteTags.map((tag) => {
      return {
        id: Math.floor(Math.random() * 1000) + 1,
        ...tag,
      }
    })

    return this.tags.shift().id
  }

  async createLinks(noteLinks) {
    this.links = noteLinks.map((link) => {
      return {
        id: Math.floor(Math.random() * 1000) + 1,
        ...link,
      }
    })

    return this.links.shift().id
  }
}

module.exports = NotesRepositoryInMemory
