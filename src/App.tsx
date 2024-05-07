import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";

import style from "./App.module.css";
import { LockPanel } from "common";
import { USER_PATH_OPTIONS } from "shared";

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
          <Routes>
            {USER_PATH_OPTIONS.map((item) => (
              <Route key={item} path={item} element={<MainPage />} />
            ))}
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
