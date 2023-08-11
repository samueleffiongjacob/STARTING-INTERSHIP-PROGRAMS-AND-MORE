FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && yarn add && yarn build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/out ./client/out
COPY server/package*.json ./server/
RUN cd server && yarn add
COPY server/server.ts ./server/

EXPOSE 9090

CMD ["node", "./api/server.ts"]