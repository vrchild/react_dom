// 引入createStore，专门用于创建reducx中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers/index'

// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk"

// 引入redux-devtools-extension
import {composeWithDevTools} from "redux-devtools-extension";

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
