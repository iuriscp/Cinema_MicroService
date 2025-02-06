import schema from "../schemas/movieSchema.js"

export default function validateMovie(req, res, next){
    const { error } = schema.validate(req.body);
    if( error ){
        const { details } = error;
        return res.status(422).json(details.map(d=>d.message));
    }

    next();
};