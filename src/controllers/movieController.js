// Controller de filmes — MovieTime API
const Movie = require('../models/Movie');

const createMovie = async (req, res) => {
  try {
    const { title, director, watched } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: 'O campo "title" é obrigatório.' });
    }
    const movie = await Movie.create({ title, director, watched });
    return res.status(201).json({ success: true, message: 'Filme criado com sucesso.', data: movie });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro interno ao criar filme.', error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    return res.status(200).json({ success: true, message: 'Filmes recuperados com sucesso.', data: movies });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro interno ao buscar filmes.', error: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ success: false, message: 'Filme não encontrado.' });
    return res.status(200).json({ success: true, message: 'Filme encontrado.', data: movie });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro interno ao buscar filme.', error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ success: false, message: 'Filme não encontrado.' });
    const { title, director, watched } = req.body;
    if (title !== undefined && title === '') {
      return res.status(400).json({ success: false, message: 'O campo "title" não pode ficar em branco.' });
    }
    await movie.update({ title, director, watched });
    return res.status(200).json({ success: true, message: 'Filme atualizado com sucesso.', data: movie });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro interno ao atualizar filme.', error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ success: false, message: 'Filme não encontrado.' });
    await movie.destroy();
    return res.status(200).json({ success: true, message: 'Filme deletado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro interno ao deletar filme.', error: error.message });
  }
};

module.exports = { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };