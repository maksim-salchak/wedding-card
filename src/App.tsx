import React, { useState } from "react";

import style from "./App.module.css";
import { LockPanel } from "./common";

const App = () => {
  const [lock, setLock] = useState(true);

  return (
    <div className={style.app}>
      {lock ? (
        <LockPanel
          unlockPage={(value) => {
            setLock(value);
          }}
        />
      ) : (
        <span>You're welcome</span>
      )}
    </div>
  );
};

export default App;
