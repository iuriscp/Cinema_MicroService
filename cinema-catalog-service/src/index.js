import cinemaCatalog from './api/cinemaCatalog.js';
import movies from './api/cinemaCatalog.js'
import * as repository from './repository/repository.js'
import * as server from './server/server.js'

(async() => {
    try {
        await server.start(cinemaCatalog, repository);
    }
    catch (error) {
        console.error(error);
    }
})(); //iife immediately invoked function expression
