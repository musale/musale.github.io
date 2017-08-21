FROM node:alpine
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

ONBUILD RUN npm install
