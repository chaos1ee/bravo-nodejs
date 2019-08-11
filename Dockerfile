# 设置node:12-alpine为基础镜像
FROM node:latest

# 设置容器的/app目录为工作目录
WORKDIR /app

# 复制当前目录的文件到容器的/app目录
COPY  . /app

RUN npm install

# 环境变量
ENV PORT 80

EXPOSE ${PORT}

# 容器创建时执行
CMD [ "npm", "start" ]