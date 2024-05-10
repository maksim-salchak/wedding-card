import React, { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages";

import style from "./App.module.css";
import { LockPanel, MuteIcon, UnmuteIcon } from "common";

import mainSong from "./assets/audio/EdSheeranPerfect.mp3";

const App = () => {
  const [lock, setLock] = useState(true);
  const [mute, setMute] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSong = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const muteSong = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setMute(!mute);
  };

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
            start={playSong}
            unlockPage={(value) => {
              setTimeout(() => setLock(value), 2400);
            }}
          />
        ) : (
          <MainPage muteBtn={muteBtn} />
        )}

        <audio ref={audioRef} loop src={mainSong} preload="auto" />
      </div>
    </BrowserRouter>
  );
};

export default App;
