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
  }
}
`;
