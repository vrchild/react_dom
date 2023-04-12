import React, {useState} from 'react';

function DemoUseState(props) { // 渲染1+N次，相当于render
  console.log(props)
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jack')
  function increment() {
    // setCount(count + 1) 第一种写法
    setCount(count => count + 1) // 第二种写法
    //不管哪一种，setCount里的count都是把上一次的计算结果给你的
    console.log('DemoUseState', count)
  }
  function changeName() {
    // setName('mary') // 第一种写法
    setName(name => {console.log(name);return 'mary'}) // 第二种写法
  }
  return (
    <div>
      <h1>DemoUseState</h1>
      <h1>count: {count}</h1>
      <button onClick={increment}>+1</button>
      <h1>name: {name}</h1>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}
/*class DemoSetState extends React.Component {
  state = {count: 0}
  increment = () => {
    this.setState((state, props) => {
      console.log(state, props)
      return {count: state.count + 1}
    }, () => {
      console.log(this.state.count)
    })
  }
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}*/

export default DemoUseState;
