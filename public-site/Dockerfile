FROM node:10.15.3

WORKDIR /usr/app

# Install deps
COPY ./package.json ./yarn.lock ./
RUN yarn install

# Copy app code
COPY . .

# Expose Ports
EXPOSE 8000

# Default Command
CMD ["yarn", "start"]
