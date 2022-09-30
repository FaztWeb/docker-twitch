FROM node:18 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

CMD [ "node", "./src/index.js" ]