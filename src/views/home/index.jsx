import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./copns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";

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

  console.log(goodPriceInfo);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <h2>{!goodPriceInfo ? <div>loading</div> : goodPriceInfo.title}</h2>
        <ul>
          {!goodPriceInfo ? (
            <div>loading</div>
          ) : (
            goodPriceInfo.list?.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })
          )}
        </ul>
      </div>
    </HomeWrapper>
  );
});

export default Home;
