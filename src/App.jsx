import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">
        <Outlet />
      </div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
