const store = require('./store/index')

store.subscribe(()=>{
    console.log('订阅数据的变化',store.getState());
})

// 修改store中的数据:必须action
store.dispatch({type:"change_name",name:"yjm123"})

store.dispatch({type:"change_name",name:"yjm520"})

// 修改counter
store.dispatch({type:"add_number",num:10})
