FROM node:14.4.0

RUN mkdir -p /home/src/app/

WORKDIR /home/src/app/

COPY  package.json /home/src/app/package.json
# 复制本地主机的 （为 Dockerfile 所在目录的相对路径）到容器中的目录
RUN npm i

RUN npm audit fix

COPY . /home/src/app/

EXPOSE 3000

CMD npm start
