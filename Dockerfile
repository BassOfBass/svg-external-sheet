# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /

COPY . .

RUN npm install -g npm@latest \
  && npm install --production

CMD ["node", "npm run dev"]
