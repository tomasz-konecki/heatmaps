import React, { useRef, useEffect } from "react";
import h337, { HeatmapData, Heatmap } from "heatmap.js";

import classes from "./HeatmapExample.module.scss";

function HeatmapExample() {
  const containerRef = useRef(null);
  let heatmap;

  const createHeatmap = () => {
    heatmap = h337.create({
      container: containerRef.current,
      backgroundColor: "black"
    });

    heatmap.setData({
      // min: 0,
      max: 99,
      data: [
        { x: 550, y: 400, value: 99 },
        { x: 250, y: 100, value: 44 },
        { x: 50, y: 200, value: 66 },
        { x: 250, y: 200, value: 77 },
        { x: 150, y: 220, value: 66 },
        { x: 150, y: 220, value: 66 },
        { x: 150, y: 220, value: 66 }
      ]
    });
  };

  const removeHeatmap = () => {
    const container = containerRef.current;

    while (container.firstChild) {
      container.firstChild.remove();
    }
  };

  useEffect(() => {
    console.log(">>> containerRef:", containerRef.current);

    if (containerRef.current) {
      createHeatmap();
    }
  }, [containerRef.current]);

  console.log("containerRef", containerRef.current);

  return (
    <div className={classes["main"]}>
      <h2>Heatmap Example</h2>
      <div className={classes["heatmap-continer"]} ref={containerRef}></div>

      <button onClick={removeHeatmap}>Remove</button>
    </div>
  );
}

export default HeatmapExample;
