import {ADD_PERSON} from "../constant";

const initState = []
export default function personReducer(preState=initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      // 为什么不用unshift，因为react_redux比较的是引用地址的值，发下没变，不刷新页面
      return [data, ...preState]
    default:
      return preState
  }
}
