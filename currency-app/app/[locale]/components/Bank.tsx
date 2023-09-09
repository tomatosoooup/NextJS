import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const Bank: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/YTV7wicytl8ujYPT/scene.splinecode");
  }, []);

  return (
    <div>
      <canvas id="canvas3d" style={{ background: "transparent" }}></canvas>
    </div>
  );
};

export default Bank;
