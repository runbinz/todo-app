# Setup instruction for singular docker container

# User an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container
COPY package*.json .

# install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that app runs on
EXPOSE 5003

# Define command to run application
CMD ["node", "./src/server.js"]

