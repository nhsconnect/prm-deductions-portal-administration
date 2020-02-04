FROM node:11.15.0-alpine
WORKDIR /app
COPY package*.json ./
COPY node_modules/ ./node_modules
COPY build/ /app/

EXPOSE 3000
RUN apk add --no-cache tini
# Tini is now available at /sbin/tini
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
