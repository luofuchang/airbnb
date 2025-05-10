import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
      components: resolve(__dirname, "./src/components"),
      utils: resolve(__dirname, "./src/utils"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // "primary-color": "#1DA57A",
          // "link-color": "#1DA57A",
          // "border-radius-base": "2px",
          // 或者导入一个 Less 文件来覆盖变量
          // 'hack': `true; @import "${path.resolve(__dirname, 'src/styles/variables.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
