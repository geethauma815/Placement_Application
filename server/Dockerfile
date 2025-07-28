# server/Dockerfile

# 1. Start with a Node.js image
FROM node:18-slim

# 2. Install Python and Pip
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# 3. Create and activate a Python virtual environment
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# 4. Set the working directory
WORKDIR /app

# 5. Copy and install Node.js dependencies
COPY package*.json ./
RUN npm install

# 6. Copy and install Python dependencies
COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# 7. Download the spaCy model using its own command
RUN python -m spacy download en_core_web_md

# 8. Copy the rest of your application code
COPY . .

# 9. Define the command to start your server
CMD ["node", "index.js"]
