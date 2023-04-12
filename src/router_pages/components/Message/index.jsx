import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import Detail from "../Detail";

const data = [
  {id: 1, title: 'msg1'},
  {id: 2, title: 'msg2'},
  {id: 3, title: 'msg3'},
  {id: 4, title: 'msg4'}
]

export default class Message extends Component {
  pushShow = (id, title) => {
    // push + params编程跳转
    // this.props.history.push(`/about/message/detail/${id}/${title}`)
    // push + search编程跳转
    // this.props.history.push(`/about/message/detail?id=${id}&title=${title}`)
    // push + state编程跳转
    this.props.history.push('/about/message/detail',{id, title})
  }
  replaceShow = (id, title) => {
    // replace + params编程跳转
    // this.props.history.replace(`/about/message/detail/${id}/${title}`)
    // replace + search编程跳转
    // this.props.history.replace(`/about/message/detail?id=${id}&title=${title}`)
    // replace + state编程跳转
    this.props.history.replace('/about/message/detail',{id, title})
  }
  forward = ()=> {
    this.props.history.goForward()
  }
  back = ()=> {
    this.props.history.goBack()
  }
  go = ()=> {
    this.props.history.go(2)
  }
  render() {
    return (
      <div>
        <ul>
          {
            data.map(item => {
              return (
                <li key={item.id}>
                  {/*向路由组件传递params参数*/}
                  {/*<Link to={`/about/message/detail/${item.id}/${item.title}`}>{item.title}</Link>*/}

                  {/*向路由组件传递search参数*/}
                  {/*<Link to={`/about/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>*/}

                  {/*向路由组件传递state参数*/}
                  <Link to={{pathname: '/about/message/detail', state: {id: item.id, title: item.title}}}>{item.title}</Link>
                  &nbsp;&nbsp;<span onClick={() => this.pushShow(item.id, item.title)} style={{color: 'red'}}>push编程跳转</span>
                  &nbsp;&nbsp;<span onClick={() => this.replaceShow(item.id, item.title)} style={{color: 'green'}}>replace编程跳转</span>
                </li>
              )
            })
          }
        </ul>
        {/*声明接收params参数*/}
        {/*<Route path='/about/message/detail/:id/:title' component={Detail} />*/}

        {/*search参数无需接收*/}
        {/*<Route path='/about/message/detail' component={Detail} />*/}

        {/*state参数无需接收*/}
        <Route path='/about/message/detail' component={Detail} />
        <button onClick={this.forward}>前进</button>
        <button onClick={this.back}>后退</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
