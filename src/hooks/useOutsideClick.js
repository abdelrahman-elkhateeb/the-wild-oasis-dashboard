import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // ضفنا Check زيادة هنا ونشوف الـ Log
        console.log("Checking Click...", {
          target: e.target,
          refElement: ref.current,
        });

        if (ref.current && !ref.current.contains(e.target)) {
          console.log("MATCH! Closing now...");
          handler();
        }
      }

      // بنسجل الـ Listener
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}