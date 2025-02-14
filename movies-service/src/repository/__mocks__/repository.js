const movies = [{
    "_id": "6708103381d25937c316c9b5",
    "titulo": "Os Vingadores: Jest Test huehue",
    "sinopse": "Os heróis mais poderosos da Terra enfrentando o Thanos. De novo.",
    "duracao": 181,
    "dataLancamento": {
      "$date": new Date("2025-02-01T00:00:00.000Z"),
    },
    "imagem": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "categorias": [
      "Aventura",
      "Ação"
    ]
  },
  {
    "_id": "6708103381d25937c316c9b6",
    "titulo": "Os Vingadores: Guerra Infinita",
    "sinopse": "Os heróis mais poderosos da Terra enfrentando o Thanos",
    "duracao": 149,
    "dataLancamento": {
      "$date": new Date("2018-04-26T00:00:00.000Z"),
    },
    "imagem": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "categorias": [
      "Aventura",
      "Ação"
    ]
  }]

export async function getAllMovies() {
      return movies;
  }

export async function getMovieById(id) {
    if (id == -1) return null;

    movies[0]._id = id;
    return movies[0];
}

export async function getMoviePremieres() {
    movies[0].dataLancamento = new Date();
    return [movies[0]];
}

export async function addMovie(movie) {
    return movies[0];
}

export async function deleteMovie(id) {
  if(!id) throw new Error('nao foi possivel excluir este filme.')
    return true;
}