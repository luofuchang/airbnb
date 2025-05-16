import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./copns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  // 首页加载时，发送请求获取数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const { goodPriceInfo } = useSelector(
    (state) => ({ goodPriceInfo: state.home.goodPriceInfo }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <ul className="room-list">
            {goodPriceInfo.list?.slice(0, 8)?.map((item) => {
              return <RoomItem itemData={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
