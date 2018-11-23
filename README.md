# markdown-html-loader

------
安装
```
    npm install markdown-html-loader -D
```
使用 
```javascript
    // webpack.config.js
    modules:{
        rules:[
            {
                test: /\.md/,
                loader: 'markdown-html-loader'
            }
        ]
    }
```  
开发依赖
>[showdown](https://github.com/showdownjs/showdown)
