FROM node:latest

# app directory inside container
WORKDIR /usr/src/app

# dependencies
COPY package*.json ./

# run on container
RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "src/index.js"]