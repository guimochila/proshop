import express from 'express';
import init from './utils/loaders/expressLoader';
import { httpLogger } from './utils/logger';
import { getRoutes } from './routes';

const app = init(express());

app.use(httpLogger);

app.use('/api', getRoutes());

export default app;
