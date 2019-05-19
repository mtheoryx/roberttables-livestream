FROM node:10.15.3

WORKDIR /usr/app

# Install deps
COPY ./package.json ./package-lock.json ./
RUN npm install --quiet

# Copy app code
COPY . .

# Expose Ports
EXPOSE 8000

# Default Command
CMD ["npm", "run", "start"]
