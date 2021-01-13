# 创建镜像

```
docker imgae build  ./ -t imgaeName:x.x.x
```

基于路径./（当前路径）打包一个镜像，镜像的名字是 himgaeName，版本号是 x.x.x

--tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。

`docker images`来查看本机已有的镜像

# 创建/启动容器

`docker container create -p 3000:3000 imgaeName:x.x.x`

`docker container start xxx #`xxx 为上一条命令运行得到的结果

使用 docker container create 来创建基于 imgaeName:x.x.x 镜像的一个容器，使用-p 来指定端口绑定——将容器中的 80 端口绑定在宿主机的 2333 端口。执行完该命令，会返回一个容器 ID

`docker containers ls` 来查看当前运行的容器
