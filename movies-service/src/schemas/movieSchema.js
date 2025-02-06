import Joi from "joi";

const schema = Joi.object({
    titulo: Joi.string()
            .required()
            .max(150)
            .min(2),
    sinopse: Joi.string()
            .required()
            .min(10)
            .max(500),
    duracao: Joi.number()
            .required()
            .min(10),
    dataLancamento: Joi.date()
            .required(),
    imagem: Joi.string()
            .required()
            .pattern(/https?:\/\/.*\.(jpe?g|png|gif|svg)/i),
    categorias: Joi.array().items(Joi.string()).required()
});

export default schema;
