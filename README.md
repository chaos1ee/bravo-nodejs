<h1 align="center">Bravo Node.js</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

## Description

这是一个 koa 项目骨架，遵循 MVC 架构，集成了 nodejs 生态常用的模块。

## 自动化构建

使用 github 的 webhook 关联 dockerhub 上的镜像仓库，每次往 master 分支合并代码都会触发 hook，以更新 dockerhub 镜像仓库里的 latest 镜像，每次给代码打 tag 都会生成一个 release 镜像用于发版。

## 🏠 [Homepage](https://github.com/chaos1ee/bravo-nodejs#readme)

## Run in docker

```sh
docker run -dit -p 3000:80 chaos1ee/bravo-nodejs
```

## Install

```sh
yarn
```

## Dev

```sh
yarn start
```

## Build

```sh
yarn build
```

## Author

👤 **chaos1ee**

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/chaos1ee/bravo-nodejs/issues).

## Show your support

Give a ⭐️ if this project helped you!
