##基于seajs和grunt的前端目录结构
<pre>
|--static
    |-- demo 例子
        |-- app 业务demo
    |-- js 源码
        |--app 业务逻辑代码
    |--public  公共资源
        |--js 部署代码
            |--dist  部署业务逻辑代码
            |--jquery 
            |--seajs
            |--config.js  seajs配置文件
            |--...
        |--theme 样式
    |--Gruntfile.js
    |--package.json
    |--README.md
</pre>

###简单demo开发(seaj官方的例子)

##### 1.seajs的config配置

##### 2.grunt安装已经Gruntfile.js,package.json文件的配置

##### 3.demo/app/test/index.html:
    
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Hello Sea.js</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <div id="container">
        <img src="https://i.alipayobjects.com/e/201211/1cqKb32QfE.png" width="44" height="44" alt="H">
        <img src="https://i.alipayobjects.com/e/201211/1cqKb2rJHI.png" width="44" height="44" alt="e">
        <img src="https://i.alipayobjects.com/e/201211/1cqKeZrUpg.png" width="44" height="44" alt="l">
        <img src="https://i.alipayobjects.com/e/201211/1cqM4u3Ejk.png" width="44" height="44" alt="l">
        <img src="https://i.alipayobjects.com/e/201211/1cqKoKV2Sa.png" width="44" height="44" alt="o">
        <img src="https://i.alipayobjects.com/e/201211/1cqKb4JU4K.png" width="44" height="44" alt=",">
        <img src="https://i.alipayobjects.com/e/201211/1cqKojFDLY.png" width="44" height="44" alt="S">
        <img src="https://i.alipayobjects.com/e/201211/1cqKb2sBO8.png" width="44" height="44" alt="e">
        <img src="https://i.alipayobjects.com/e/201211/1cqKb2LmXk.png" width="44" height="44" alt="a">
        <img src="https://i.alipayobjects.com/e/201211/1cqKb1jcWC.png" width="44" height="44" alt="J">
        <img src="https://i.alipayobjects.com/e/201211/1cqKojb72y.png" width="44" height="44" alt="S">
    </div>
    <script src="../../../public/js/seajs/sea.js"></script>
    <script src="../../../public/js/config.js"></script>
    <script>seajs.use('dist/app/test/index');</script>
    </body>
    </html>

##### 4.js/app/test文件夹写 两个js文件 
    spinning.js 
    index.js

##### 5.npm install 以及grunt的转化、合并、压缩

##### 6.开发版与部署版通过sea的config中development参数配置


    
