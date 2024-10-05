import React, { memo, useCallback, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "../../store/modules/home";
import SectionHeader from "../../components/section-header/index";
import SectionRooms from "../../components/section-rooms";
import SectionTabs from "../../components/section-tabs";
import SectionFooter from "../../components/section-footer";
import HomeLongfor from "../../views/home/c-cpns/home-longfor";

const Home = memo(() => {
  // 使用useSelector将redux中store的数据映射到组件内
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  );
  // 定义数据

  const [name, setName] = useState("佛山");
  // 数据的转换
  const tabNames = discountInfo.dest_address?.map((item) => item.name);

  // useCallback使用场景:在往子组件传入了一个函数并且子组件被React.momo缓存了的时候使用
  const tabClickHandle1 = useCallback(function (index, name) {
    setName(name);
  }, []);

  const [city, setCity] = useState("季华园");
  const tabCitys = recommendInfo.dest_address?.map((item) => item.name);
  const tabClickHandle2 = useCallback(function (index, name) {
    setCity(name);
  }, []);

  // 使用dispatch直接派发异步事件,发起网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 展示折扣数据 */}
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          ></SectionHeader>
          <SectionTabs
            tabNames={tabNames}
            tabClick={tabClickHandle1}
          ></SectionTabs>
          {/* 动态设置其宽度为33.33% */}
          <SectionRooms
            roomList={discountInfo.dest_list?.[name]}
            itemWidth="33.33%"
          ></SectionRooms>
          <SectionFooter name={name}></SectionFooter>
        </div>
        <div className="recommend">
          <SectionHeader title={recommendInfo.title}></SectionHeader>
          <SectionTabs
            tabNames={tabCitys}
            tabClick={tabClickHandle2}
          ></SectionTabs>
          {/* 动态设置其宽度为33.33% */}
          <SectionRooms
            roomList={recommendInfo.dest_list?.[city]}
            itemWidth="33.33%"
          ></SectionRooms>
          <SectionFooter name={city}></SectionFooter>
        </div>

        <div className="long-for">
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        </div>

        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
          <SectionFooter></SectionFooter>
        </div>

        <div className="high-score">
          <SectionHeader title={highScoreInfo.title}></SectionHeader>
          <SectionHeader subtitle={highScoreInfo.subtitle}></SectionHeader>
          <SectionRooms roomList={highScoreInfo.list}></SectionRooms>
          <SectionFooter></SectionFooter>
        </div>

        <div className="plus">
          <SectionHeader title={plusInfo.title}></SectionHeader>
          <SectionRooms roomList={plusInfo.list}></SectionRooms>
          <SectionFooter name="plus"></SectionFooter>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
