#!/bin/bash

# Function to check if a port is available
check_port() {
  if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
    return 1
  else
    return 0
  fi
}

# Check if port 3000 is available
if check_port 3000; then
  PORT=3000
else
  PORT=3001
  # 修改前端项目的端口为3001
  sed -i 's/"start": "react-scripts start"/"start": "PORT=3001 react-scripts start"/' client/package.json
fi

# Install dependencies
npm install --prefix client
npm install --prefix server

# Build front-end and back-end
npm run build --prefix client
npm run build --prefix server

# Start front-end and back-end services
npm run start --prefix client &
npm run start --prefix server -- --port=$PORT &
