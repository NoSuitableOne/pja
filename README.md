# 项目概述
项目名字`PJA`表示`Project A`，是我个人做的第一个**完整项目**。所谓**完整项目**有**完整**和**项目**两个词组成。
- **完整**：项目目前包含了web前端+python后台+数据库和部署文件，可以直接在环境上部署运行
- **项目**：不同于普通`demo`，项目表示有实际意义，在一段时间内也会更新、维护下去

**由来**： 平时阅读博客内容会浏览各个网站，搜索不同栏目，所以一个**信息聚合阅读**的工具是有实际意义的。

# 项目结构
```
- serverside
- frontend
- deployment
```

## serverside 项目后端部分
使用`flask`框架，后端核心内容包含在`app`目录中。
后端在和前端交互中负责提供`API`返回数据，前端页面部分后台服务只渲染`index.html`，其余逻辑由前端控制；后端负责和数据库交互进行”增删改查“操作。
目前后端核心内容已经构建完成，主要位于`app`目录下，核心包含三个部分：
- 使用`flask_restful`构建`RESTful API`
- 使用`flask_sqlalchemy`操作数据库
- 使用`flask_apscheduler`构建定时任务

内容来源是自己做的爬虫，通过定时任务每天爬取三个IT论坛的新闻博客，后续会考虑升级为分布式爬虫。

数据库使用了`sqlite3`数据库，数据库直接放在`db`目录下，后期根据情况考虑迁移到其他数据库

## frontend 项目前端部分
使用`react`框架，现阶段使用`antd`组件配合`dva`脚手架
前端部分负责向后端请求数据，所有页面数据展示逻辑全部由前端控制，使用`Redux`负责状态管理

目前大部分内容都是用`antd`组件，只有背景部分使用到`canvas`，后续根据情况会融入其他前端技术栈

## deployment 项目部署部分
目前生产环境下项目运行使用`nginx + gunicorn`，所以需要提前在环境上安装`nginx`
项目部署包含两个阶段
1. 生成前端生产环境文件：前端部分在`frontend`目录下执行`npm run build`命令，执行结果在`dist`目录下
2. 后端部署：
  1. 前端内容迁移到后端：上一步中`dist`目录下的`index.html`迁移到`app/templates`目录下，`css`/`js`迁移到`app/static`目录下
  2. 后端内容：
    开发环境：先启动`env/bin/activate`运行虚拟环境，然后使用`pip install -r requirements.txt`下载`python`依赖包，最后直接启动`python manage.py    runserver`即可
    生产环境：修改`deployment`下的`config/nginx.conf/wsgi.py/gunicorn.py.ini/start.sh`文件写入自己的配置内容并放到对应目录下，同开发环境启动虚拟环境，下载依赖，运行`start.sh`脚本启动`gunicorn`，最后启动`nginx`即可
    
---

第一阶段总结：
这个项目`idea`从零到有开始于自己学习`python`/`react`等内容做`demo`时，也受到其他人所做类似内容启发。
这个项目会一直持续下去，会提升实用性，也会在小范围内真实使用
