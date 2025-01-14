import movies from './api/movies.js'
import * as repository from './repository/repository.js'
import * as server from './server/server.js'

(async() => {
    try {
        await server.start(movies, repository);
    }
    catch (error) {
        console.error(error);
    }
})(); //iife immediately invoked function expression
