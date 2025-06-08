import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgb(33, 33, 33);
  flex-direction: column;
  background-color: #333;
  opacity: 1;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      //   动画
      .pic-enter {
        transform: translateX(${(props) => (props.$isnext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 0.2s ease;
      }

      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
      }
    }
  }

  .preview {
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .pic-list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 0.3s ease;
        height: ${(props) => (props.$showList ? "67px" : "0")};

        .pic-item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
