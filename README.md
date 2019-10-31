<h1 align="center">Bravo Node.js</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

### Description

这是一个koa项目骨架，遵循MVC架构，集成了nodejs生态常用的模块。

## 自动化构建

使用github的webhook关联dockerhub上的镜像仓库，每次往master分支提交代码都会触发hook，以更新dockerhub镜像仓库里的latest镜像，每次给代码打tag都会生成一个release镜像用于发版。

## 🏠 [Homepage](https://github.com/maybeeee/nodejs#readme)

## Run in docker

```sh
docker run -dit -p 3000:80 maybeeee/bravo-nodejs
```

## Install

```sh
yarn
```

## Dev

```sh
yarn dev
```

## Build

```sh
yarn build
```

## Author

👤 **maybeeee**

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/maybeeee/nodejs/issues).

## Show your support

Give a ⭐️ if this project helped you!
