import styled from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 25px;
  width: 300px;
  height: 48px;
  box-sizing: border-box;
  padding: 0 8px;
  cursor: pointer;

  ${(props) => props.theme.mixins.boxShadow}

  .text {
    padding: 0 8px;
    color: #222;
    font-weight: 600;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #fff;
    background-color: ${(props) => props.theme.color.primary};
  }
`;
