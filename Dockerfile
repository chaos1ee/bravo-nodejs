FROM node:latest

LABEL version="0.0.1"
LABEL author="maybeeee" 

ENV PORT 80

WORKDIR /app
COPY  . /app
RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]