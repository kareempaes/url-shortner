FROM node:21.1-alpine as base
FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

FROM deps as runner
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
