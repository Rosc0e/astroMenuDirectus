FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Start the application
CMD ["node", "./dist/server/entry.mjs"]
