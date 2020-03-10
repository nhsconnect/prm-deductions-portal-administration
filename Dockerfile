FROM node:11.15.0-alpine
WORKDIR /app
COPY package*.json ./
COPY build/ /app/

# This should be done to avoid any platform dependent packages
RUN npm install

EXPOSE 3000
RUN apk add --no-cache tini
# Tini is now available at /sbin/tini
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
