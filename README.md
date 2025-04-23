Backend:
1. 进入后端目录
   cd backend
2. 安装依赖
   pip install -r requirements.txt
3. 启动服务
   uvicorn app.main:app --reload

Frontend:
1. npm run dev

Docker:
1. 构建镜像
   docker build -t my-app .
2. 运行容器
   docker run -p 3000:3000 my-app

Docker Compose:
1. 构建和启动所有服务
   docker-compose up -d
2. 查看运行中的容器
   docker-compose ps
3. 停止所有服务
   docker-compose down 

常见问题:
1. 如果拉取 Docker 镜像失败，尝试使用更稳定的基础镜像版本
2. 确保 .env 文件中包含了正确的环境变量配置
