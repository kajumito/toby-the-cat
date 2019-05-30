FROM node:12

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package.json package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build container code.
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Run the web service on container startup.
CMD [ "npm", "start" ]