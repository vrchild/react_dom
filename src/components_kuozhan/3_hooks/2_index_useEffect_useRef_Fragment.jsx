import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom'
import {root} from '../../index';
import App from "../../App";

function DemoUseEffect() { // 渲染1+N次，相当于render
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()
  function increment() {
    setCount(count => count + 1) // 第二种写法
  }
  function removeDom() {
    root.unmount(<App />)
  }
  function tip() {
    alert(myRef.current.value)
  }
  React.useEffect(() => { // 第一个参数是回调函数，这个函数有点像有点像componentDidMount和componentDidUpdate，一上来就开始执行，括号里的又像watch，只监听count的变化就会触发
    // 这个回调函数、、、、返回的函数就相当于componentWillUnmount（卸载钩子）
    // let timer = setTimeout(() => { // 所以这里要注意，每执行这里的count的更新，就会触发一次
    //   setCount(count + 1)
    // }, 2000)
    let timer = setInterval(() => {
      setCount(prev => prev + 1)
    }, 2000)
    return () => {
      // componentWillUnmount（卸载钩子）
      clearInterval(timer)
    }
  }, [count])
  // 不加第二个参数【】，意味着全部监测，
  // 加上【】空数组，默认谁都不检测
  return (
    <Fragment>
      <h1>DemoUseEffect</h1>
      <h2>count: {count}</h2>
      <input type="text" ref={myRef}/>
      <button onClick={increment}>+1</button>
      <button onClick={removeDom}>removeDom</button>
      <button onClick={tip}>tip ipt</button>
    </Fragment>
  )
}

/*class DemoUseEffect extends React.Component {
  myRef = React.createRef()
  state = {count: 0}
  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  removeDom = () => {
    // ReactDOM.unmountComponentAtNode(document.getElementById('root')) // react版本太高，这个废弃了应该是
    root.unmount(<App />)
  }
  tip = () => {
    alert(this.myRef.current.value)
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1})
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      // 不想再套一层div的话就用<Fragment>标签，且只能传key这一个属性，用于遍历
      // 也可以写<></>空标签，但是什么属性都不能传
      // <div>
      <Fragment>
        <h1>count: {this.state.count}</h1>
        <input type="text" ref={this.myRef}/>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.removeDom}>removeDom</button>
        <button onClick={this.tip}>tip ipt</button>
      </Fragment>
      // </div>
    );
  }
}*/

export default DemoUseEffect;
