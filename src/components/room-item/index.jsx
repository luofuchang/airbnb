import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { Carousel } from "antd";
import Indicator from "@/base-ui/Indicator";
import { useState } from "react";

const RoomItem = memo((props) => {
  const { itemData, itemwidth, itemClick } = props;
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const leftClickHandle = (e) => {
    sliderRef.current.prev();
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? itemData.picture_urls.length - 1 : newIndex;
    });
    e.stopPropagation();
  };

  const rightClickHandle = (e) => {
    sliderRef.current.next();
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > itemData.picture_urls.length - 1 ? 0 : newIndex;
    });
    e.stopPropagation();
  };

  const slider = itemData?.picture_urls?.length > 0;

  const ItemClickHandle = () => {
    if (itemClick) itemClick(itemData);
  };

  return (
    <RoomItemWrapper
      $itemwidth={itemwidth}
      $verify_color={itemData?.verify_info?.text_color ?? "#39576a"}
      $content_color={itemData?.bottom_info?.content_color ?? "#39576a"}
      $content_fontsize={itemData?.bottom_info?.font_size ?? "12px"}
      onClick={ItemClickHandle}
    >
      <div className="inner">
        {!slider && (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}
        {slider && (
          <div className="slider">
            <div className="control">
              <div className="btn left" onClick={(e) => leftClickHandle(e)}>
                <IconArrowLeft width="24" height="24" />
              </div>
              <div className="btn right" onClick={(e) => rightClickHandle(e)}>
                <IconArrowRight width="24" height="24" />
              </div>
            </div>
            <div className="indicator">
              <Indicator activeIndex={activeIndex}>
                {itemData &&
                  itemData.picture_urls.map((item, index) => {
                    return (
                      <div className="dot-item" key={item}>
                        <span
                          className={`dot ${
                            index === activeIndex ? "active" : ""
                          }`.trim()}
                        ></span>
                      </div>
                    );
                  })}
              </Indicator>
            </div>
            <Carousel dots={false} ref={sliderRef}>
              {itemData &&
                itemData.picture_urls.map((item, index) => (
                  <div className="cover" key={index}>
                    <img src={item} alt="" />
                  </div>
                ))}
            </Carousel>
          </div>
        )}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <div className="rating">
            <Rating
              precision={0.2}
              value={itemData.star_rating ?? 3}
              sx={{ fontSize: "12px", color: itemData?.star_rating_color }}
            />
          </div>
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra"> · {itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default RoomItem;
