FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && yarn add && yarn build

FROM node:17 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/out ./client/out
COPY server/package*.json ./server/
RUN yarn

RUN yarn global add pm2 


COPY . .

RUN yarn build

EXPOSE 3080

CMD ["pm2-runtime","dist/server.js"]