FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install 

USER node

CMD ["npm","run","start"]