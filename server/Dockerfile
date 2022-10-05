FROM node

WORKDIR /root/app/
COPY package.json .
RUN npm i

COPY . .
RUN npm run build
EXPOSE 3333:80
CMD [ "npm","start" ]

