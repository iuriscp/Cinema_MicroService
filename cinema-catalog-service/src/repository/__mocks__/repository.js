const cinemaCatalog = [{
  cidade: "Gravataí",
  uf: "RS",
  cinemas: []
}, {
  cidade: "Porto Alegre",
  uf: "RS",
  pais: "BR",
  cinemas: [{
      _id: ObjectId(),
      nome: "Cinemark Bourbon Ipiranga",
      salas: [{
          nome: 1,
          sessoes: [{
              data: ISODate("2025-02-01T09:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b5"),
              filme: "Vingadores: Guerra Infinita",
              valor: 25.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: false
              }]
          }, {
              data: ISODate("2025-02-03T11:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b5"),
              filme: "Vingadores: Guerra Infinita",
              valor: 25.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: true
              },]
          }, {
              data: ISODate("2025-02-03T13:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b7"),
              filme: "Vingadores: Era de Ultron",
              valor: 20.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: false
              }, {
                  numero: 2,
                  disponivel: true
              },]
          }]
      }, {
          nome: 2,
          sessoes: [{
              data: ISODate("2025-01-20T09:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b7"),
              filme: "Vingadores: Era de Ultron",
              valor: 25.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: false
              },]
          }, {
              data: ISODate("2025-02-01T11:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b6"),
              filme: "Vingadores: Ultimato",
              valor: 25.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: true
              },]
          }, {
              data: ISODate("2025-02-01T14:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b6"),
              filme: "Vingadores: Ultimato",
              valor: 20.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: false
              }, {
                  numero: 2,
                  disponivel: true
              },]
          }]
      }]
  }, {
      _id: ObjectId(),
      nome: "GNC Lindóia",
      salas: [{
          nome: 100,
          sessoes: [{
              data: ISODate("2025-02-05T19:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b6"),
              filme: "Vingadores: Ultimato",
              valor: 25.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: false
              },]
          }, {
              data: ISODate("2025-01-18T11:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b6"),
              filme: "Vingadores: Ultimato",
              valor: 25.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: true
              },]
          }, {
              data: ISODate("2025-02-30T13:00:00Z"),
              idFilme: ObjectId("6708103381d25937c316c9b7"),
              filme: "Vingadores: Era de Ultron",
              valor: 20.00,
              assentos: [{
                  numero: 1,
                  disponivel: true
              }, {
                  numero: 2,
                  disponivel: false
              }, {
                  numero: 2,
                  disponivel: true
              },]
          }]
      }]
  }]
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