FROM node:10.16.2-alpine

LABEL version=0.0.1
LABEL author=maybeeee

ENV PORT 80

WORKDIR /app
COPY  . /app

RUN yarn

EXPOSE $PORT

CMD [ "yarn", "start" ]