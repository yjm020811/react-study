import {createStore,applyMiddleware,compose} from 'redux'
// 正常情况下,store.dispatch()只能派发一个对象
import thunk from 'redux-thunk'
import reducer from './reducer'

//redux开启与关闭window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:开发环境,compose:生产环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store
