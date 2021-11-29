import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

function loader(app: Application) {
  app.use(helmet());

  app.enable('trust proxy');

  app.get('/health', (_, res) => {
    res.status(200).send();
  });
  app.head('/health', (_, res) => {
    res.status(200).send();
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  return app;
}

export default loader;
