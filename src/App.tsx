import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages";

import style from "./App.module.css";
import { LockPanel, MuteIcon, UnmuteIcon } from "common";

import mainSong from "./assets/audio/EdSheeranPerfect.mp3";

const App = () => {
  const [lock, setLock] = useState(true);
  const [mute, setMute] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    window.addEventListener("click", () => {
      setTimeout(() => {
        playSong();
      });
    });

    document.body.onload = () => {};
  }, []);

  const playSong = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const muteSong = () => setMute(!mute);

  const muteBtn = (
    <button className={style.muteBtn} onClick={muteSong}>
      {mute ? <MuteIcon /> : <UnmuteIcon />}
    </button>
  );

  return (
    <BrowserRouter>
      <div className={style.app}>
        {lock ? (
          <LockPanel
            unlockPage={(value) => {
              playSong();
              setTimeout(() => setLock(value), 2400);
            }}
          />
        ) : (
          <MainPage muteBtn={muteBtn} />
        )}

        <audio ref={audioRef} loop={true} autoPlay={true} muted={mute}>
          <source src={mainSong} type={"audio/mp3"} />
        </audio>
      </div>
    </BrowserRouter>
  );
};

export default App;
