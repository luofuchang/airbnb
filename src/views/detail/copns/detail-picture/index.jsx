import React, { memo } from "react";
import { PictureWrapper } from "./style";
import { useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/PictureBrowser";
import { useState } from "react";

const DetailPicture = memo(() => {
  const detailInfo = useSelector((state) => state.detail.detailInfo);
  const [showBrowser, setShowBrowser] = useState(false);
  return (
    <PictureWrapper>
      <div className="top">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>

      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo?.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </PictureWrapper>
  );
});

export default DetailPicture;
