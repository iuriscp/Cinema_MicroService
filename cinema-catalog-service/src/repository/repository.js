import { connect } from '../config/database.js';
import { ObjectId } from "mongodb";

export async function getAllCities() {
      const db = await connect();

      return db.collection("cinemaCatalog")
	  		.find({})
			.project({ cidade:1, uf:1, pais:1 })
		  	.toArray();
  }


export async function getCinemasByCityId(cityId) {
	const objcityId = new ObjectId(cityId);
	const db = await connect();
	
	const city = await db.collection("cinemaCatalog")
		.findOne({_id: objcityId}, {projection: { cinemas:1 }});
	return city.cinemas;
}

export async function getMoviesByCinemaId(cinemaId) {
	const objCinemaId = new ObjectId(cinemaId);
	const db = await connect();

	const group = await db.collection("cinemaCatalog").aggregate([
		{ $match: {"cinemas._id": objCinemaId} },
		{ $unwind: "$cinemas" },
		{ $unwind: "$cinemas.salas"},
		{ $unwind: "$cinemas.salas.sessoes"},
		{ $group: { _id: { titulo: "$cinemas.salas.sessoes.filme", _id: "$cinemas.salas.sessoes.idFilme" } } }
	]).toArray();

	return group.map(g => g._id);
}

export async function getMoviesByCityId(cityId) {
	const objcityId = new ObjectId(cityId);
	const db = await connect();
	const group = await db.collection("cinemaCatalog").aggregate([
		{ $match: {"_id": objcityId} },
		{ $unwind: "$cinemas" },
		{ $unwind: "$cinemas.salas"},
		{ $unwind: "$cinemas.salas.sessoes"},
		{ $group: { _id: { titulo: "$cinemas.salas.sessoes.filme", _id: "$cinemas.salas.sessoes.idFilme" } } }
	]).toArray();

	return group.map(g => g._id);
}

export async function getMovieSessionsByCityId(movieId, cityId) {
	const objcityId = new ObjectId(cityId);
	const objmovieId = new ObjectId(movieId);
	const db = await connect();
	const group = await db.collection("cinemaCatalog").aggregate([
		{ $match: {"_id": objcityId} },
		{ $unwind: "$cinemas" },
		{ $unwind: "$cinemas.salas"},
		{ $unwind: "$cinemas.salas.sessoes"},
		{ $match: { "cinemas.salas.sessoes.idFilme": objmovieId } },
		{ 	
			$group: { 
				_id: { 
					titulo: "$cinemas.salas.sessoes.filme",
					_id: "$cinemas.salas.sessoes.idFilme",
					cinema: "$cinemas.nome",
					idCinema: "$cinemas._id",
					sala:  "$cinemas.salas.nome",
					sessao: "$cinemas.salas.sessoes"
				} 
			} 
		}
	]).toArray();
	return group.map(g => g._id);
}

export async function getMovieSessionsByCinemaId(movieId, cinemaId) {
	const objCinemaId = new ObjectId(cinemaId);
	const objMovieId = new ObjectId(movieId);
	const db = await connect();
	const group = await db.collection("cinemaCatalog").aggregate([
		{ $match: {"cinemas._id": objCinemaId} },
		{ $unwind: "$cinemas" },
		{ $unwind: "$cinemas.salas"},
		{ $unwind: "$cinemas.salas.sessoes"},
		{ $match: { "cinemas.salas.sessoes.idFilme": objMovieId } },
		{ 	
			$group: { 
				_id: { 
					titulo: "$cinemas.salas.sessoes.filme",
					_id: "$cinemas.salas.sessoes.idFilme",
					cinema: "$cinemas.nome",
					idCinema: "$cinemas._id",
					sala:  "$cinemas.salas.nome",
					sessao: "$cinemas.salas.sessoes"
				} 
			} 
		}
	]).toArray();
	return group.map(g => g._id);
}