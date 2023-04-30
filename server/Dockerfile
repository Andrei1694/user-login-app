FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install 

USER node

CMD [ "sh", "-c", "sleep 10 && npm start" ]