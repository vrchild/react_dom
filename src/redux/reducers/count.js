import {INCREMENT, DECREMENT} from "../constant";

const initPreState = 99
// reducer 两个作用， 1。初始化状态； 2.加工store
export default function countReducer(preState=initPreState, action) {
  const {type, data} = action
  switch (type) {
    case INCREMENT:
    return preState + data
    case DECREMENT:
    return preState - data
    default:
      return preState
  }
}
