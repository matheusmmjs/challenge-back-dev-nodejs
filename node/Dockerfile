FROM node:15.11.0

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#RUN yarn add typescript -D \
#  && yarn add express \
#  && yarn add @types/express -D \
#  && yarn add ts-node-dev -D \
#  && yarn add tsconfig-paths -D \
#  && yarn add eslint -D \
#  && yarn add prettier eslint-config-prettier eslint-plugin-prettier -D \
#  && yarn add jest -D \
#  && yarn add ts-jest -D \
#  && yarn add @types/jest -D \
#  #&& yarn add sonar-scanner -D \
#  && yarn add typeorm reflect-metadata \
#  && yarn add mysql \
#  && yarn add bcryptjs \
#  && yarn add @types/bcryptjs -D \
#  && yarn add jsonwebtoken \
#  && yarn add @types/jsonwebtoken -D \
#  && yarn add axios \
#  && yarn add @babel/plugin-proposal-decorators -D
