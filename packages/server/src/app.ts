import express from 'express';
import init from './utils/loaders/expressLoader';
import { httpLogger } from './utils/logger';
import { getRoutes } from './routes';
import { globalErrorHandler, notFound } from './utils/errorHandler';

const app = init(express());

app.use(httpLogger);

app.use('/api', getRoutes());

// Handling Errors
app.use(notFound);
app.use(globalErrorHandler);

export default app;
