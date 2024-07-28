import React, {useEffect, useState} from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const root = {
  background: "url('./bg-1.webp')",
  height: '100vh',
  width: "100%",
  overflow: "scroll"
}

const stepStyle = {
  display: "inline-block",
  border: "1px solid red",
  width: 200,
  padding: 15,
  margin: 50,
  background: "red",
  color: "white",
  fontSize: 20
}

const initialNodes = [
  { id: '1', position: { x: 25, y: 25 }, data: { label: '1' } },
  { id: '2', position: { x: 200, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 25, y: 170 }, data: { label: '3' } },
  { id: '4', position: { x: 200, y: 250 }, data: { label: '4' } },
  { id: '5', position: { x: 100, y: 340 }, data: { label: '5' } },

];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-5', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },

];

export const UmraContent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState();

  return <div style={root}>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
  </div>;
};
