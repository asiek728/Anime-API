const animeSeriesData = require('../data')

class Anime {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.seasons = data.seasons
    this.year = data.year
  }

  static getAll() {
    const animeSeries = animeSeriesData.map(v => new Anime(v))
    return animeSeries
  }

  static findById(animeID) {
    try {
      const animeData = animeSeriesData.find(v => v.id === animeID)
      const anime = new Anime(animeData)
      return anime
    } catch (error) {
      throw new Error('This anime does not exist!!!!!!')
    }
  }

  static create(data) {
    if (!data.name) throw new Error('Anime name is missing')

    try {
      let nextId
      animeSeriesData.length
        ? nextId = animeSeriesData.reduce((v1, v2) => v1.id > v2.id ? v1 : v2).id + 1
        : nextId = 1

      const newAnime = new Anime({ id: nextId, name: data.name, seasons: data.seasons, year: data.year })
      animeSeriesData.push(newAnime)
      return newAnime
    } catch (err) {
      throw new Error(err)
    }
  }

  update(data) {
    try {
      const animeData = animeSeriesData.find(anime => anime.id === this.id)

      if (!animeData) {
        throw new Error('Anime not found')
      }

      if (!data.name) {
        throw new Error('Anime name missing')
      }

      animeData.name = data.name
      return new Anime(animeData)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  destroy() {
    const animeData = animeSeriesData.find(anime => anime.id === this.id)

    if (animeData) {
      const animeIndex = animeSeriesData.indexOf(animeData)
      animeSeriesData.splice(animeIndex, 1)
    } else {
      throw new Error('Anime not found')
    }
  }
}

module.exports = Anime
