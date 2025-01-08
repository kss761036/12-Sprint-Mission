import { useEffect } from "react";

function useOutSideClick(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.closest('[data-menu="button"]') // 버튼에 data-menu="button" 줘야함.
      ) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;
