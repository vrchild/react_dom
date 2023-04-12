// 该文件用于合并reducer
import { combineReducers } from "redux";

//引入为count组件服务的reducer
import count from './count'
import person from './person'

// 多个reducer需要汇总处理
export default combineReducers({
  count,
  person
})
