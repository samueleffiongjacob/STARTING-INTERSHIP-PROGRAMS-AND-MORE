FROM node:17

WORKDIR usr/server

COPY package*.json ./

RUN yarn

RUN yarn global add pm2 

COPY . .

RUN yarn build

EXPOSE 3080

CMD ["pm2-runtime","node dist/server.js -i max"]