python 虚拟环境
python -m venv venv

激活虚拟环境
.\venv\Scripts\activate

安装所有依赖的包
pip install -r requirements.txt

查看所以已经安装的包
pip list 

添加/更新 requirements.txt 文件
pip freeze > requirements.txt

升级某个包并更新 requirements.txt
pip install --upgrade package_name && pip freeze > requirements.txt

删除无用的包
pip uninstall -r requirements.txt -y && pip install -r requirements.txt && pip freeze > requirements.txt

运行应用
uvicorn app.main:app --reload

Swagger 
http://127.0.0.1:8000/docs
Redoc
http://127.0.0.1:8000/redoc


docker build -t meetingroom-backend .
docker run -d -p 8000:8000 --name meetingroom-backend meetingroom-backend