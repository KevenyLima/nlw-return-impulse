FROM node:16.3.0-alpine

WORKDIR /root/app/
COPY ./server/package.json .
COPY ./server/package-lock.json .
RUN npm i

COPY ./server/jest.config.ts .
COPY ./server/tsconfig.json .

COPY ./server .
COPY ./server/.env .

RUN npm run build

RUN npx prisma generate
EXPOSE 80
CMD [ "npm","start" ]

