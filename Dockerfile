FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY ./ ./
EXPOSE 3001
CMD [ "npm" , "run" , "start"]

# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm", "run", "start"]