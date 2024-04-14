#!/bin/bash

# 安装前端和后端的依赖
npm install --prefix client
npm install --prefix server

# 构建前端和后端
npm run build --prefix client
npm run build --prefix server

# 启动前端和后端服务
npm run start --prefix client -- --port=3001 &
npm run start --prefix server -- --port=3000 &