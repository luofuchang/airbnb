import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./copns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./copns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";

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
  const { highScoreInfo } = useSelector(
    (state) => ({ highScoreInfo: state.home.highScoreInfo }),
    shallowEqual
  );
  const { discountInfo } = useSelector(
    (state) => ({ discountInfo: state.home.discountInfo }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subTitle={discountInfo.subtitle}
          />
          <SectionRoom
            roomList={discountInfo.dest_list?.["广州"]}
            itemwidth="33.33333333%"
          />
        </div>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
