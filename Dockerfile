# pull the base image
# YARN WORKS IN ALPINE
FROM node:current-alpine3.15

ARG app_env

ENV APP_ENV $app_env

# set the working direction
RUN mkdir -p /app
WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
COPY package.json ./
COPY tsconfig.json ./

COPY package-lock.json ./

RUN npm install --silent
RUN yarn
RUN tsc --version


COPY . ./


# start app
CMD if [ ${APP_ENV} = production ]; \
    then \
    yarn add http-server && \
    npm run build && \
    cd build && \
    http-server -p 3000; \
    else \
    npm run start; \
    fi