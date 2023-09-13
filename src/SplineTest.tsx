import { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

export default function SplineTest() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (ref?.current !== null) {
      const app = new Application(ref.current);
      app.load("https://prod.spline.design/4N3R7TbQIgZ4yocu/scene.splinecode");
    }
  }, [ref]);
  return <canvas ref={ref}></canvas>;
}
