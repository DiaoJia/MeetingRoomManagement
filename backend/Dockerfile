FROM python:3.12.3-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# 暴露应用程序端口
EXPOSE 8000

# 启动应用程序
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]