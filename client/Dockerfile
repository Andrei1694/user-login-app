# Base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the port used by Vite)
EXPOSE 3000

# Start the application with the production build
CMD [ "npm", "run", "start", "--host" ]