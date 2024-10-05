import * as actionTypes from './constansts'
import axios from 'axios'

export const addNumberAction = (num)=>({type:actionTypes.ADD_NUMBER,num})

export const subNumberAction = (num)=>({type:actionTypes.SUB_NUMBER,num})

export const changeBannersAction = (banners)=>({type:actionTypes.CHANGE_BANNERS,banners})

export const changeRecommendsAction = (recommends)=>({type:actionTypes.CHANGE_RECOMMENDS,recommends})

export const fetchHomeMultidataAction = ()=>{
    // 如果是一个普通的action,那么我们需要返回一个对象,但对象拿不到服务器返回的异步数据,所以需要使用redux-thunk增强action,来返回一个函数
  return function foo(dispatch,getState){
        axios.get("http://123.207.32.32:8000/home/multidata").then((res)=>{
        const banners =res.data.data.banner.list
        const recommends = res.data.data.recommend.list
        console.log(banners,recommends);
        dispatch(changeBannersAction(banners))
        dispatch(changeRecommendsAction(recommends))
        // 获取state中的数据
        console.log(getState().counter);
        })
    }
}

