# Pull official base image
FROM node:lts-alpine

# Set working directory
WORKDIR /usr/src/reactapp/reactapp

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/reactapp/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --silent

# Add app
COPY . .

EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]