import { Handle, Position, NodeToolbar } from "@xyflow/react";

const NodeStyle = {
  backgroundColor: "#0000007d",
  backgroundRepeat: "no-repeat",
  color: "white",
  display: "flex",
  justifyContent: "center",
  borderRadius: 15,
  paddingTop: 10,
  textAlign: "center",
  fontSize: 10,
};

type Props = {
  data: {
    label: string;
    width: number;
    height: number;
    bg: {
      url: string;
      size: number;
      position?: string
    };
  };
};
export const CustomNode = ({ data }: Props) => {
  const handleNodeClick = (e) => {
    console.log(e);
  };

  return (
    <div
      onClick={handleNodeClick}
      style={{
        ...NodeStyle,
        backgroundImage: `url(${data.bg.url})`,
        backgroundSize: data.bg.size,
        backgroundPosition: data.bg.position ? data.bg.position : "center 80%",
        width: data.width,
        height: data.height,
      }}
    >
      {/* <NodeToolbar isVisible>
        Toolbar
      </NodeToolbar> */}
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} id={data.label} />
      <Handle type="source" position={Position.Bottom} id={data.label} />
    </div>
  );
};
