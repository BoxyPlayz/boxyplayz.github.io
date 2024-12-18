# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

# No need for build tools for production environment
# RUN apk add --no-cache python3 make g++  # This has been removed

WORKDIR /usr/src/app/

# Copy only the necessary files for installing production dependencies
COPY package.json package-lock.json ./ 

# Install only production dependencies (no need for cache clean)
RUN npm ci --omit=dev

# Copy the rest of the application files
COPY . .

USER node

EXPOSE 3000

CMD npm run start