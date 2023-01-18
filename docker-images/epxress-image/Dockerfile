FROM node:14.21.1

EXPOSE 3000

COPY src /opt/app 

WORKDIR /opt/app

RUN npm install

CMD [ "node", "index.js" ]
