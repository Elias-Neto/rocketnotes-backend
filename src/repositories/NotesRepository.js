const knex = require("../database/knex")

class NotesRepository {
  async createNote({ title, description, user_id }) {
    const note_id = await knex("notes").insert({
      title,
      description,
      user_id,
    })

    return note_id
  }

  async createTags(tags) {
    const lastTagAdded_id = await knex("tags").insert(tags)

    return lastTagAdded_id
  }

  async createLinks(links) {
    const lastLinkAdded_id = await knex("links").insert(links)

    return lastLinkAdded_id
  }
}

module.exports = NotesRepository
