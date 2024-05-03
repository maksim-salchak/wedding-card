import React, { useState } from "react";

import style from "./App.module.css";
import { LockPanel } from "./common";
import { MainPage } from "./pages";

const App = () => {
  const [lock, setLock] = useState(true);

  return (
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
  );
};

export default App;
