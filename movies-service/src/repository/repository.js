import { connect } from '../config/database.js';
import { ObjectId } from "mongodb";

export async function getAllMovies() {
      const db = await connect();

      return db.collection("movies").find().toArray();;
  }

export async function getMovieById(id) {
  const db = await connect();
  return db
    .collection("movies")
    .findOne({ _id: new ObjectId(id) });
}

export async function getMoviePremieres() {
  const monthAgo = new Date();
  monthAgo.setMonth(-1);

  const db = await connect();
  return db
    .collection("movies")
    .find({ dataLancamento: { $gte: monthAgo } })
    .toArray();
}
