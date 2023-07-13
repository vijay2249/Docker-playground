FROM node

WORKDIR /app_6

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=user
ENV MONGODB_PASSWORD=password

CMD [ "npm", "start" ]