import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primaryColor};

  .btns{
    display: flex;
    .btn{
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover{ 
        background-color: #f5f5f5;
      }
    }
  }
  .profile{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    margin-right: 24px; 
    margin-left: 12px;

    ${(props) => props.theme.mixins.boxShadow}

    .panel{
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      // height: 200px;
      background-color: #fff;
      box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 1px solid #ccc;
      color: #666;

      .top, .bottom{
        padding: 10px 0;

        .item{
          height: 40px;
          line-height: 40px;
          padding: 0 20px;

          &:hover{
            background-color: #f5f5f5;
          }
        }
      }

      .top{
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
`;
