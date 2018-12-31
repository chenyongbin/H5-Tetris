# ECMAScript-X版俄罗斯方块

> 本地编译操作

    // 初次编译时，需要安装依赖
    npm install
    // 开发环境，编译、启动项目
    npm run dev    
    // 生产环境，编译、打包项目
    npm run build

> 目录介绍

    src
    |--- control
         |--- index.js 控制板主流程
    |--- engine
         |--- builder.js 方块生成器
         |--- db.js 数据库
         |--- timer.js 定时器
         |--- index.js 引擎主流程
    |--- html
         |--- template.html html模板文件
    |--- screen
         |--- block.js 方块类
         |--- index.js 屏幕主流程
         |--- matrix.js 方块矩阵
         |--- state.js 状态
    |--- bootstrap.js 引导程序
    |--- canvas.js 画布类
    |--- config.js 配置文件
    |--- gamepanel.js 游戏面板    
    |--- util.js 功能模块