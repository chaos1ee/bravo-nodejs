FROM node:latest

WORKDIR /app

COPY  . /app

RUN npm install

ENV PORT 80

EXPOSE ${PORT}

CMD [ "npm", "start" ]