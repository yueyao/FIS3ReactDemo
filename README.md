###React Demo 

-------
基于FIS3-Smarty的React+ES6 开发Demo。

####实现
- ES6
- CommonJS
- React + JSX
- data mock
- 借助fis-components进行前端资源管理


####附带前端资源
> 使用`fis-components`进行前端资源管理

> example: fis3 install zepto --save 
  
- Zepto             (DOM选择等)
- normalize.css     （CSS样式一致化）
- superagent        （ajax）
- react / react-dom   
- React-router  (路由)
- react-weui    (微信ui React版)
- hammerjs      (移动端手势库)
- classnames    (React配合库，用于css类名定义)

use example: 
```
// ajax请求库
import request from 'superagent';

const api = '/api/bddata'

let getData = (fn) => {
    request
        .get(api)
        .end((err, res)=>{
            fn(res.body)
        })
}
```

####FIS3 插件

```
npm install npm3 -g 

npm3 install fis3 -g

npm3 i -g  fis3-parser-babel  【重要】 

npm3 i -g fis-parser-less-2.x

npm3 i -g  fis3-hook-relative

npm3 i -g  fis3-hook-commonjs 

npm3 i -g  fis-optimizer-clean-css 

npm3 i -g  fis-optimizer-uglify-js

npm3 i -g fis3-postpackager-loader

npm3 i -g  fis3-smarty

```

####Start

```
fis3 server start --type smarty  //开启smarty服务

fis3 release -cw   // release 

... 修改文件 or 查看示例
```

####查看示例

[本地模拟数据](http://127.0.0.1:8080/reactdemo/page/datamock/index)

[weui-React组件](http://127.0.0.1:8080/reactdemo/page/weui/index)

[react-router示例](http://127.0.0.1:8080/reactdemo/page/router/index)


####FAQ

打包/编译/合并等自行修改fis-conf.js