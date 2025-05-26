import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .MuiPaginationItem-icon {
    font-size: 30px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page {
      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .desc {
      margin-top: 20px;
    }
  }
`;
