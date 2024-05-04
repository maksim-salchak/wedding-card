import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages";

import style from "./App.module.css";
import { LockPanel } from "common";

const App = () => {
  const [lock, setLock] = useState(true);

  return (
    <BrowserRouter>
      <div className={style.app}>
        {lock ? (
          <LockPanel
            unlockPage={(value) => {
              setTimeout(() => setLock(value), 2400);
            }}
          />
        ) : (
          <MainPage />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
