const store = require('./store/index')
//拿到store中的数据进行打印
console.log(store.getState());

// 修改store中的数据:必须action
const nameAction = {
    type:"change_name",
    name:"yjm123"
}
//将这个action派发,然后去修改
store.dispatch(nameAction)
//修改了数据后获取数据将其打印
console.log(store.getState());

const nameAction2 = {
    type:"change_name",
    name:"yjm520"
}
store.dispatch(nameAction2)

console.log(store.getState());


// 修改counter
const counterAction = {
    type:"add_number",
    num:10
}
store.dispatch(counterAction)
console.log(store.getState());