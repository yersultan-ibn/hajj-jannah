import { useMemo } from "react";
import { ReactFlow } from "@xyflow/react";
import { CustomNode } from "./CustomNode";

import "@xyflow/react/dist/style.css";

const root = {
  background: "url('./bg-1.webp')",
  height: "100vh",
  width: "100%",
  overflow: "scroll",
};

const initialNodes = [
  {
    id: "1",
    position: { x: 75, y: 25 },
    data: {
      label: "1. Intention",
      bg: {
        url: "steps/step-1.svg",
        size: 40,
      },
    },
    type: "custom",
  },
  {
    id: "2",
    position: { x: 250, y: 100 },
    data: {
      label: "2. Umrah Ihram",
      bg: {
        url: "steps/step-2.svg",
        size: 40,
      },
    },
    type: "custom",
  },
  {
    id: "3",
    position: { x: 75, y: 180 },
    data: {
      label: "3. Tawaf",
      bg: {
        url: "steps/step-3.svg",
        size: 60,
      },
    },
    type: "custom",
  },
  {
    id: "4",
    position: { x: 250, y: 280 },
    data: {
      label: "4. Safa wa Marwa",
      bg: {
        url: "steps/step-4.svg",
        size: 70,
      },
    },
    type: "custom",
  },
  {
    id: "5",
    position: { x: 170, y: 400 },
    data: {
      label: "5. Clip and Shave hair",
      bg: {
        url: "steps/step-5.svg",
        size: 40,
      },
    },
    type: "custom",
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-5", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

export const UmraContent = () => {
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  return (
    <div style={root}>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
        />
      </div>
    </div>
  );
};
