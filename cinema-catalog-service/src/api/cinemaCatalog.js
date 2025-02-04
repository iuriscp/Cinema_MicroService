
export default (app, repository) => {

    app.get('/cities/:cityId/movies/:movieId', async(req, res, next)=>{
        const moviesessions = await repository.getMovieSessionsByCityId(req.params.movieId, req.params.cityId);
        if(!moviesessions) return res.sendStatus(404);
        res.json(moviesessions);
    })

    app.get('/cities/:cityId/movies', async(req, res, next)=>{
        const movies = await repository.getMoviesByCityId(req.params.cityId);
        if(!movies) return res.sendStatus(404);

        res.json(movies);
    })

    app.get('/cities/:cityId/cinemas', async(req, res, next)=>{
        const cinemas = await repository.getCinemasByCityId(req.params.cityId);
        if(!cinemas) return res.sendStatus(404);

        res.json(cinemas);
    })

    app.get('/cities', async(req, res, next) => {
        const cities = await repository.getAllCities();
        res.json(cities);

    app.get('/cinemas/:cinemaId/movies/:movieId', async(req, res, next)=>{
        const moviesessions = await repository.getMovieSessionsByCinemaId(req.params.movieId, req.params.cinemaId);
        if(!moviesessions) return res.sendStatus(404);

        res.json(moviesessions);
    }) 

    app.get('/cinemas/:cinemaId/movies', async(req, res, next)=>{
        const movies = await repository.getMoviesByCinemaId(req.params.cinemaId);
        if(!movies) return res.sendStatus(404);

        res.json(movies);
    })
    
    
    })
}