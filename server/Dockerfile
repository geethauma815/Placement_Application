# server/Dockerfile

# Start with a Node.js image
FROM node:18-slim

# Install Python and Pip into the container
RUN apt-get update && apt-get install -y python3 python3-pip

# Set the working directory
WORKDIR /app

# Copy and install Node.js dependencies
COPY package*.json ./
RUN npm install

# Copy and install Python dependencies (including the spaCy model)
COPY requirements.txt ./
RUN pip3 install -r requirements.txt

# Copy the rest of your application code
COPY . .

# Define the command to start your server
CMD ["node", "index.js"]