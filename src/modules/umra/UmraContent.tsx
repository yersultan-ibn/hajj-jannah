import { useMemo, useState } from "react";
import { ReactFlow } from "@xyflow/react";
import { CustomNode } from "./CustomNode";

import "@xyflow/react/dist/style.css";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const root = {
  background: "url('./bg-1.webp')",
  height: "100vh",
  width: "100%",
  overflow: "scroll",
};

const initialNodes = [
  {
    id: "1",
    position: { x: 75, y: 50 },
    data: {
      label: "1. Intention",
      width: 100,
      height: 100,
      bg: {
        url: "steps/step-1.svg",
        size: 43,
        position: "center 150%"
      },
    },
    type: "custom",
  },
  {
    id: "2",
    position: { x: 250, y: 200 },
    data: {
      label: "2. Umrah Ihram",
      width: 100,
      height: 100,
      bg: {
        url: "steps/step-2.svg",
        size: 40,
      },
    },
    type: "custom",
  },
  {
    id: "3",
    position: { x: 75, y: 350 },
    data: {
      label: "3. Tawaf",
      width: 100,
      height: 100,
      bg: {
        url: "steps/step-3.svg",
        size: 60,
      },
    },
    type: "custom",
  },
  {
    id: "4",
    position: { x: 250, y: 500 },
    data: {
      label: "4. Safa wa Marwa",
      width: 100,
      height: 100,
      bg: {
        url: "steps/step-4.svg",
        size: 70,
      },
    },
    type: "custom",
  },
  {
    id: "5",
    position: { x: 160, y: 750 },
    data: {
      label: "5. Clip and Shave hair",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-5.svg",
        size: 40,
      },
    },
    type: "custom",
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-5", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

export const UmraContent = () => {
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
  return (
    <div style={root}>
 <Button style={{margin: 10}}>
        <Link href="/">Home</Link>
      </Button>
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
