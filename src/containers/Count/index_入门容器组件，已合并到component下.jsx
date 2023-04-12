// 容器组件
// 引入ui组件
import Count from "../../components/Count_react_redux";
// 引入store    import store from "../../redux/store";  ----注意，要从上级以props的形式传进来
//引入connect用于连接count组件与redux
import {connect} from "react-redux";
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from "../../redux/actions/count";

// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value------状态
// const mapStateToProps = state => ({count: state})

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value------更改状态的方法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     jia: number => dispatch(createIncrementAction(number)),
//     jian: number => dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
//   }
// }

// 使用connect()()创建并暴露一个容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(Count)

// 优化   --- react-redux自动dispatch    mapDispatchToProps简写
export default connect(
  state => ({count: state}),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  })(Count)
