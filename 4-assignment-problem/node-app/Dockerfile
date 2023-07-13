FROM node

WORKDIR /app_4_1

COPY package.json /app_4_1/

RUN npm install

COPY . /app_4_1/

EXPOSE 3000

CMD [ "node", "server.js" ]