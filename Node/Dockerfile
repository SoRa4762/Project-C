# what image and its version
FROM node:21-bullseye

# working diretory
WORKDIR /app 

# files to install packages
COPY package*.json .

# install packages
RUN yarn

# prisma migrate
# RUN npx prisma migrate dev --name deploy
# RUN npx prisma init

# copy installed packages
COPY . .

# prisma generate
RUN yarn prisma generate
# RUN yarn prisma migrate dev --name deploy

# your local port
EXPOSE 5000

# your devlopment code
CMD ["yarn", "start"]