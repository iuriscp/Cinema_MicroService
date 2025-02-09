import winston from "winston";
import path from "path";
import { fileURLToPath } from "url"; // Para converter a URL em caminho de arquivo

// Obtendo o caminho do arquivo atual (logger.js)
const __filename = fileURLToPath(import.meta.url);

// Obtendo o diretório onde o arquivo logger.js está localizado
const __dirname = path.dirname(__filename);

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ 
            filename: path.join(__dirname, "../logs", 'error.log'), 
            level: 'error' })   
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;
 