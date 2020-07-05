FROM node:12.14.0

RUN mkdir -p /home/src/app/

WORKDIR /home/src/app/

COPY  package.json /home/src/app/package.json

RUN npm i

RUN npm audit fix

COPY . /home/src/app/

EXPOSE 3000

CMD npm start
