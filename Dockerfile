FROM node:12.20.0-alpine as dist

RUN mkdir -p /home/app
COPY dist/apps/ /home/app
WORKDIR /home/app

CMD [ "yarn", "start" ]


