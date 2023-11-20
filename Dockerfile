FROM node:21.1-alpine as base
FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json packate-lock.json ./
RUN npm i

FROM deps as builder
WORKDIR /app

COPY . .