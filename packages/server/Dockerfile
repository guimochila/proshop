FROM node:16-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV FRONTEND_URL=${FRONTEND_URL}
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /usr/src/app
COPY package.json ./

RUN yarn install
COPY . .
RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]
