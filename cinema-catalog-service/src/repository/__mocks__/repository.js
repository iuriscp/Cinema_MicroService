import { ObjectId } from "mongodb";

const cinemaCatalog = [{
  cidade: "Gravataí",
  uf: "RS",
  cinemas: []
}, {
  cidade: "Porto Alegre",
  uf: "RS",
  pais: "BR",
  cinemas: [{
      _id: new ObjectId("6708103381d25937c316c9b5"),
      nome: "Cinemark Bourbon Ipiranga",
      salas: [{
          nome: 1,
          sessoes: [{
              data: new Date("2025-02-01T09:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b5"),
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
              data: new Date("2025-02-03T11:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b5"),
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
              data: new Date("2025-02-03T13:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b7"),
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
              data: new Date("2025-01-20T09:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b7"),
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
              data: new Date("2025-02-01T11:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b6"),
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
              data: new Date("2025-02-01T14:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b6"),
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
      _id: new ObjectId(),
      nome: "GNC Lindóia",
      salas: [{
          nome: 100,
          sessoes: [{
              data: new Date("2025-02-05T19:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b6"),
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
              data: new Date("2025-01-18T11:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b6"),
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
              data: new Date("2025-02-30T13:00:00Z"),
              idFilme: new ObjectId("6708103381d25937c316c9b7"),
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

export function getAllCities() {
      return cinemaCatalog.map(catalog => {
        return{
            _id: new ObjectId("6708103381d25937c316c9b7"),
            pais: catalog.pais,
            uf: catalog.uf,
            cidade: catalog.cidade
        }
      })
  }

export function getCinemasByCityId(cityId) {
    if( cityId < 0) return null;
    return cinemaCatalog[cinemaCatalog.length - 1].cinemas;
}

export function getMoviesByCinemaId(cinemaId) {
    if( cinemaId < 0) return null;
    return getCinemasByCityId().map(cinema => {
        return{
            titulo:cinema.salas[0].sessoes[0].filme,
            _id: cinema.salas[0].sessoes[0].idFilme
        }
    })
}

export function getMoviesByCityId(cityId) {
    return getMoviesByCinemaId(cityId);
}

export function getMovieSessionsByCityId(movieId, cityId) {
    if( cityId < 0 || movieId < 0 ) return null;
    return getCinemasByCityId().map(cinema => {
        return{
            titulo:cinema.salas[0].sessoes[0].filme,
            _id: cinema.salas[0].sessoes[0].idFilme,
            cinema: cinema.nome,
            idCinema: cinema._id,
            sala: cinema.salas[0].nome,
            sessao: cinema.salas[0].sessoes[0]
        }
    }) 
}

export function getMovieSessionsByCinemaId(movieId, cinemaId) {
    return getMovieSessionsByCityId(movieId, cinemaId);
}