import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;
  width: ${(props) => props.$itemwidth};
  // width: 25%;

  // height: 100%;
  // display: flex;

  .inner {
    width: 100%;
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      width: 30%;
      z-index: 9;
      left: 0;
      right: 0;
      margin: 0 auto;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .control {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: space-between;
    display: none;
    color: #fff;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 83px;
      height: 100%;
      background: linear-gradient(
        to left,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );

      &.right {
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.6% 8px 0;
    border-radius: 10px;
    overflow: hidden;

    .ant-carousel {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .item {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      object-fit: cover; /* 确保图片填充容器 */
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.$verify_color};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    // min-height: 40px; /* 设置最小高度确保两行文本空间 */
    // flex: 1;
    margin: 4px 0;
  }
  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    margin-top: auto; /* 将底部元素推到容器底部 */

    .count {
      margin: 0 4px 0 4px;
    }

    .extra {
      color: ${(props) => props.$content_color};
      font-size: ${(props) => props.$content_fontsize};
    }

    .MuiRating-decimal {
      margin-left: -2px;
    }
  }
`;
