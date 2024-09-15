# what image and its version
FROM node:21-bullseye

# working diretory
WORKDIR /app 

# files to install packages
COPY package*.json .

# install packages
RUN yarn

# copy installed packages
COPY . .

# your local port
EXPOSE 5173 

# your devlopment code
CMD ["yarn", "dev"]