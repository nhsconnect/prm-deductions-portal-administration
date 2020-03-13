FROM node:11.15.0-alpine
WORKDIR /app

RUN apk add --no-cache tini

COPY package*.json ./
COPY build/ /app/
COPY public/ /app/build/

EXPOSE 3000

RUN npm install

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
