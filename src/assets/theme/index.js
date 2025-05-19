import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  color: {
    primary: "#ff385c",
    secondary: "#00848A",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#fff",
    black: "#000",
    transparent: "transparent",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixins: {
    boxShadow: `
      transition: all 0.3s ease; /* 平滑过渡效果 */
      transform: scale(1); /* 初始大小 */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 初始阴影 */
      
      &:hover{
        transform: scale(1.05); /* 放大5% */
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.18); /* 更明显的阴影 */
      }
    `,
  },
});

export default theme;
