import { useMemo, useState } from "react";
import { ReactFlow } from "@xyflow/react";
import { CustomNode } from "../umra/CustomNode";

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
    position: { x: 75, y: 750 },
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
  {
    id: "6",
    position: { x: 250, y: 950 },
    data: {
      label: "6. Resting & Praying",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-6.svg",
        size: 40,
      },
    },
    type: "custom",
  },
  {
    id: "7",
    position: { x: 75, y: 1150 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },
  {
    id: "8",
    position: { x: 250, y: 1300 },
    data: {
      label: "8. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "9",
    position: { x: 75, y: 1450 },
    data: {
      label: "9. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "10",
    position: { x: 250, y: 1600 },
    data: {
      label: "10. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "11",
    position: { x: 70, y: 1800 },
    data: {
      label: "11. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "12",
    position: { x: 250, y: 2000 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "13",
    position: { x: 75, y: 2200 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "14",
    position: { x: 250, y: 2400 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "15",
    position: { x: 70, y: 2600 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "16",
    position: { x: 250, y: 2800 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "17",
    position: { x: 70, y: 3000 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "18",
    position: { x: 250, y: 3200 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
        size: 40,
      },
    },
    type: "custom",
  },{
    id: "19",
    position: { x: 70, y: 3400 },
    data: {
      label: "7. Enter State ofIhram",
      width: 120,
      height: 120,
      bg: {
        url: "steps/step-7.svg",
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
  { id: "e5-6", source: "5", target: "6", animated: true },
  { id: "e6-7", source: "6", target: "7", animated: true },
  { id: "e7-8", source: "7", target: "8", animated: true },
  { id: "e8-7", source: "8", target: "9", animated: true },
  { id: "e9-9", source: "9", target: "10", animated: true },
  { id: "e10-10", source: "10", target: "11", animated: true },
  { id: "e11-11", source: "11", target: "12", animated: true },
  { id: "e12-12", source: "12", target: "13", animated: true },
  { id: "e13-13", source: "13", target: "14", animated: true },
  { id: "e14-14", source: "14", target: "15", animated: true },
  { id: "e15-15", source: "15", target: "16", animated: true },
  { id: "e16-17", source: "16", target: "17", animated: true },
  { id: "e17-18", source: "17", target: "18", animated: true },
  { id: "e18-19", source: "18", target: "19", animated: true },

];

export const HajjContent = () => {
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
