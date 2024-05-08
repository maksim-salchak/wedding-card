import React, { useRef, useState } from "react";
import style from "./LockPanel.module.scss";
import clsx from "clsx";
import videoBg from "../../assets/video/video.mp4";

interface IProps {
  unlockPage: (value: boolean) => void;
}

const LockPanel = (props: IProps) => {
  const { unlockPage } = props;

  const [lock, setLock] = useState(false);

  const dragBtnRef = useRef<HTMLDivElement | null>(null);
  const dropZoneRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const handleStart = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    const dragBtn = dragBtnRef.current;
    const drag = dragRef.current;

    if (dragBtn && drag) {
      dragBtn.classList.add(style.dragging);

      if (e.type === "touchstart") {
        dragBtn.style.transform = `translate3d(0px, 0px, 0px)`;
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", handleEnd);
      } else {
        dragBtn.style.transform = `translate3d(0px, 0px, 0px)`;
        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleEnd);
      }
    }
  };

  const handleMove = (e: TouchEvent | MouseEvent) => {
    const dragBtn = dragBtnRef.current;

    const dragRect = dragRef.current?.getBoundingClientRect();

    if (dragBtn) {
      let clientX;
      if (e.type === "touchmove") {
        clientX = (e as TouchEvent).touches[0].clientX;
      } else {
        clientX = (e as MouseEvent).clientX;
      }

      const offsetX = clientX - dragRect!.left;
      dragBtn.style.transform = `translate3d(${offsetX - 10}px, 0px, 0px)`;

      if (offsetX > 224) {
        dragBtn.style.transform = `translate3d(225px, 0px, 0px)`;
      }
      if (offsetX < -10) {
        dragBtn.style.transform = `translate3d(-10px, 0px, 0px)`;
      }
    }
  };

  const handleEnd = () => {
    const dragBtn = dragBtnRef.current;
    const dropZone = dropZoneRef.current;
    if (dragBtn && dropZone) {
      dragBtn.classList.remove(style.dragging);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);

      const dragRect = dragBtn.getBoundingClientRect();
      const dropRect = dropZone.getBoundingClientRect();

      if (
        dragRect.left <= dropRect.right &&
        dragRect.right >= dropRect.left &&
        dragRect.top <= dropRect.bottom &&
        dragRect.bottom >= dropRect.top
      ) {
        dragBtn.style.transform = `translate3d(225px, 0px, 0px)`;
        unlockPage(false);
        setLock(true);
      } else {
        dragBtn.style.transform = "";
      }
    }
  };

  return (
    <>
      <div className={style.lockPanel}>
        <div className={style.content}>
          <div className={style.title}>wedding day</div>
          <div className={style.name}>Жахонгир и Ляззат</div>
          <div className={style.unlockMessage}>Разблокируйте приглашение:</div>

          <div
            className={clsx(style.drag, lock && style.drag_blur)}
            ref={dragRef}
          >
            <div
              ref={dragBtnRef}
              className={style.dragButton}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            ></div>
            <div className={style.dragLine}></div>
            <div ref={dropZoneRef} className={style.dropZone}></div>
          </div>
        </div>
      </div>

      <video muted loop className={style.video} autoPlay>
        <source src={videoBg} type="video/mp4" />
      </video>
    </>
  );
};

export default LockPanel;
