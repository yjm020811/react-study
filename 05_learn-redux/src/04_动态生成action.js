const store = require('./store/index')
const {changeNameAction,addNumberAction} =require('./store/actionCreators')

store.subscribe(()=>{
    console.log('订阅数据的变化',store.getState());
})

// actionCreators:帮助我们创建action
// const changeNameAction = (name)=>{
//     return {
//         type:"change_name",
//         name
//     }
// }

// const addNumberAction = (num)=>{
//     return {
//         type:"add_number",
//         num
//     }
// }

// 修改store中的数据:必须action
store.dispatch(changeNameAction("kobe"))

store.dispatch(changeNameAction("yjm520"))

// 修改counter
store.dispatch(addNumberAction(100))
