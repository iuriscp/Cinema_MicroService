import "express-async-errors"; // Importando o express-async-errors
import express from "express";
import morgan from "morgan";
import helmet from "helmet";

let server = null;

export async function start(api, repository) {

  const app = express();

  app.use(helmet());
  app.use(morgan("dev"));

  app.get("/health", (req, res, next) => {
    res.send(`the service ${process.env.MS_NAME} is running at ${process.env.PORT}`);
  });

  api(app, repository);

  app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
  });

  server = app.listen(process.env.PORT, () => {
    console.log(
      `the ${process.env.MS_NAME} already started at port: ${process.env.PORT}`
    );
  });

  return server;
}

export async function stop() {
  if (server) await server.close();
  return true;
}
