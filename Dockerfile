FROM node:10
WORKDIR /app
COPY package*.json ./
# COPY tsconfig.json ./
RUN npm install
COPY . .
EXPOSE 2001
CMD ["npm","run","dev"]