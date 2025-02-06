pip install -r requirements.txt
安装所有依赖的包
pip list 
查看所以已经安装的包
pip freeze > requirements.txt
添加/更新 requirements.txt 文件
pip install --upgrade package_name && pip freeze > requirements.txt
升级某个包并更新 requirements.txt
pip uninstall -r requirements.txt -y && pip install -r requirements.txt && pip freeze > requirements.txt
删除无用的包