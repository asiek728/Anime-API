const Anime = require('../models/Anime')

const index = (req, res) => {
  const animeSeries = Anime.getAll()
  res.status(200).send({ data: animeSeries })
}

const show = (req, res) => {
  try {
    const animeID = parseInt(req.params.id)
    const anime = Anime.findById(animeID)
    res.status(200).send({ data: anime })
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}

const create = (req, res) => {
  try {
    const data = req.body
    const newAnime = Anime.create(data)
    res.status(201).send({ data: newAnime })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

const update = (req, res) => {
  try {
    const { id } = req.params
    const animeToUpdate = Anime.findById(parseInt(id))

    const updatedAnime = animeToUpdate.update(req.body)
    res.status(200).send({ data: updatedAnime })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

const destroy = (req, res) => {
  try {
    const { id } = req.params
    const animeToDelete = Anime.findById(parseInt(id))

    animeToDelete.destroy()
    res.status(204).end()
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

module.exports = {
  index, show, create, update, destroy
}
