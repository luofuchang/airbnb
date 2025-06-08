import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./copns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./copns/home-section-v1";
import HomeSectionV2 from "./copns/home-section-v2";
import { loadSuccess } from "@/utils";
import HomeLongfor from "./copns/home-longfor";
import HomeSectionV3 from "./copns/home-section-v3";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  // 首页加载时，发送请求获取数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true }));
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
  const { recommendDestInfo } = useSelector(
    (state) => ({
      recommendDestInfo: state.home.recommendDestInfo,
    }),
    shallowEqual
  );
  const { longforInfo } = useSelector(
    (state) => ({ longforInfo: state.home.longforInfo }),
    shallowEqual
  );

  const { plusInfo } = useSelector(
    (state) => ({ plusInfo: state.home.plusInfo }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {loadSuccess(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {loadSuccess(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {loadSuccess(recommendDestInfo) && (
          <HomeSectionV2 infoData={recommendDestInfo} />
        )}
        {loadSuccess(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {loadSuccess(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {loadSuccess(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
