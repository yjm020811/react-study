// 这是createSlice的方式
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHightScoreData,
  getHomeDiscountData,
  getHotRecommendData,
  getHomeLongForData,
  getHomePlusData
} from "../../services";
// import JMRequest from '../../services';

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    // 这是我自己调用数据的方法,我自己写项目是使用这种的
    // JMRequest.get({ url:"/home/goodprice"}).then((res)=>{
    //     console.log(res);
    //     dispatch(changeGoodPriceInfoAction(res))
    // })

    // JMRequest.get({ url:"/home/highscore"}).then((res)=>{
    //     console.log(res);
    //     dispatch(changeHighScoreInfoAction(res))
    // })

    // JMRequest.get({ url:"/home/discount"}).then((res)=>{
    //     console.log(res);
    //     dispatch(changeDiscountInfoAction(res))
    // })
    // 这是coderwhy调用数据的方法
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    getHomeHightScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });

    getHomeLongForData().then((res) => {
      dispatch(changeLongforInfoAction(res));
    });

    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    }
  },
  extraReducers: {}
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions;

export default homeSlice.reducer;
