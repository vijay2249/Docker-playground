FROM node 
# we want to use the "node" docker image in our custom image

WORKDIR /app_2
# changing the working directory of the container file system

COPY package.json /app_2

RUN npm install

COPY . /app_2
# COPY source_folder -> destination_folder
# this source_folder includes every file except Dockerfile
# the destination_folder is the path where the code should be stored in the image/container file system

EXPOSE 80

CMD [ "node", "server.js" ]