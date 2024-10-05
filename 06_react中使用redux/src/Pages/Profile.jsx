import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/actionCreators'

export class Profile extends PureComponent {
  constructor(){
    super()
    this.state={
        // 获取初始化的值
        counter:store.getState().counter
    }
}
componentDidMount(){
store.subscribe(()=>{
    const state = store.getState()
    this.setState({counter:state.counter})
})
}

addNumber(num){
  store.dispatch(addNumberAction(num))
}

  render() {
    const {counter}=this.state
    return (
      <div>
      <h2>Profile Counter :{counter}</h2>
      <div>
        <button onClick={e=>this.addNumber(1)}>+1</button>
        <button onClick={e=>this.addNumber(3)}>+3</button>
        <button onClick={e=>this.addNumber(5)}>+5</button>
      </div>
    </div>
    )
  }
}

export default Profile