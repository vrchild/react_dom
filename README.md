defaultChecked: 只做第一次的渲染

#### react-router：
    1.web - react-router-dom
    2.native - 
    3.any

#### 路由组件一般放在pages中

#### 注意：
1.  react-router-dom v6不支持类式组件，且移除了三个属性

### 路由的基本使用：
1.  明确好界面中的导航区，展示区
2.  导航区的a标签改为Link标签
3.  展示区写Route标签进行路径的匹配
4.  App的最外层包裹了一个BrowserRrouter标签

### 路由组件与一般组件：
    1.  写法不同
    2.  存放位置不同
    3.  接收到的props不同
        a. 一般组件： 传什么就接收什么
        b. 路由组件： 
            history:
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                push: ƒ push(path, state)
                replace: ƒ replace(path, state)
            location:
                pathname: "/home"
                search: ""
                state: undefined
            match:
                params: {}
                path: "/home"
                url: "/home"
### NavLink：
1.  点击添加类名active

### BrowserRouter 与 HashRouter 的区别
    1.  底层原理不同
        a.BrowserRouter 使用的是H5中的history API，不兼容IE9一下版本
        b.HashRouter使用的是URL的哈希值
    2. path表现形式不一样
        BrowserRouter路径中不包含#
    3. 刷新后对路由state参数的影响
        a.BrowserRouter没有任何影响，因为state保存在history对象中
        b.HashRouter刷新后会导致路由state参数丢失
    4.Hash可以用于解决一些路径错误相关的问题（刷新样式丢失）

### react_redux 开发者工具
    1. 安装redux-devtools-extension
    2. store中引入配制
