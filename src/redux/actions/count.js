/*
*  该文件专门为Count组件生成action对象
*
*/
import {INCREMENT,DECREMENT} from "../constant";
// import store from "./store";

// 同步action 就是指action的值为obj对象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action 就是指action的值为fun函数
//npm i redux-thunk 安装中间件
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
