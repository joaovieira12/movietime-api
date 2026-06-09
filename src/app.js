const express = require('express');
const app = express();

app.use(express.json());

// Rotas
const movieRoutes = require('./routes/movieRoutes');
app.use('/movies', movieRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.json({ success: true, message: 'MovieTime API está rodando!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
