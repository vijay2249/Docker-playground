FROM node

WORKDIR /app_5

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# VOLUME [ "/app_5/feedback" ]

CMD [ "npm", "start" ]