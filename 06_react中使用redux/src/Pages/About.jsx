import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { addNumberAction,subNumberAction } from '../store/actionCreators';

export class About extends PureComponent {

    calNumber(num,isAdd){
        if(isAdd){
            console.log("加",num);
            this.props.addNumber(num)
        }else{
            console.log("减",num);
            this.props.subNumber(num)
        }
    }

  render() {
    const {counter,banners,recommends}=this.props
    return (
      <div>
        <h2>{counter}</h2>
        <div>
            <button onClick={e=>this.calNumber(2,true)}>+2</button>
            <button onClick={e=>this.calNumber(10,true)}>+10</button>
            <button onClick={e=>this.calNumber(4,false)}>-4</button>
            
            
        </div>
        <div className='banner'>
            <h2>轮播图数据:</h2>
            <ul>
                {
                    banners.map((item,index)=>{
                        return <li key={index}>{item.title}</li>
                    })
                }
            </ul>
        </div>

        <div className='recommend'>
                <h2>推荐数据:</h2>
                <ul>
                    {
                         recommends.map((item,index)=>{
                            return <li key={index}>{item.title}</li>
                        })
                    }
                </ul>
        </div>
      </div>
      
    )
  }
}

// // connect()的返回值是一个高阶函数
// function mapStateToProps(state){
//     return {
//         // 想要使用的store中数据的东西
//         counter:state.counter
//     }
// }
const mapStateToProps = (state)=>({
     // 想要使用的store中数据的东西
     counter:state.counter,
     banners:state.banners,
     recommends:state.recommends
})


const mapDispatchToProps = (dispatch)=>({
        addNumber(num){
            dispatch(addNumberAction(num))
        },
        subNumber(num){
            dispatch(subNumberAction(num))
        }
})

export default connect(mapStateToProps,mapDispatchToProps)(About)