# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY tsconfig.json ./

COPY package-lock.json ./

RUN npm install --silent
RUN tsc --version

# add app
COPY . ./

# start app
CMD ["npm", "start"]