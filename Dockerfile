FROM node:lts-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN NODE_ENV=production npm run build
CMD ["npm", "run", "start"]