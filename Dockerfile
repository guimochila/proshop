FROM node:16-alpine AS builder
RUN apk update
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=@proshop/server --docker

FROM node:16-alpine AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

FROM installer AS server
RUN apk update
WORKDIR /app

COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo run build --scope=server --includeDependencies --no-deps

ARG NODE_ENV=production
ARG FRONTEND_URL
ARG DATABASE_URL
ENV NODE_ENV=${NODE_ENV}
ENV FRONTEND_URL=${FRONTEND_URL}
ENV DATABASE_URL=${DATABASE_URL}
EXPOSE 4000
CMD ["yarn", "start"]
