import React, {Component} from 'react';
import qs from 'qs'

let obj = { a: 1, b: 'asd' } // 'a=1&b=asd'   这种编码形式叫----urlencoded
let str = qs.stringify(obj)
console.log('1111', str)
console.log(qs.parse(str))

const data = [
  {id: '1', content: 'msg1'},
  {id: '2', content: 'msg2'},
  {id: '3', content: 'msg3'},
  {id: '4', content: 'msg4'}
]

class Detail extends Component {
  render() {
    console.log(this.props)
    /*接收params参数*/
    // const { id, title } = this.props.match.params

    /*接收search参数*/
    // const searchData = this.props.location.search
    // const { id, title } = qs.parse(searchData.slice(1))

    /*接收state参数*/
    const {id, title} = this.props.location.state || {} /*不加判断，清缓存后会报错*/

    const findResult = data.find(item => {
      return item.id === String(id)
    }) || {}
    console.log(findResult)
    return (
      <div>
        <ul>id: {id}</ul>
        <ul>title: {title}</ul>
        <ul>content: {findResult.content}</ul>
      </div>
    );
  }
}

export default Detail;
