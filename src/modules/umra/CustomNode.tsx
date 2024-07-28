import { Handle, Position } from '@xyflow/react';

const NodeStyle = {
  backgroundColor: "#0000007d",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  color: "white",
  width: 90,
  height: 90,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
}

type Props = {
  data: {
    label: string;
    bg: {
      url: string;
      size: number
    }
  }
}
export  const CustomNode = ({ data }: Props) =>  {
  console.log(data.bg.size)
  return (
    <div style={{...NodeStyle, backgroundImage: `url(${data.bg.url})`, backgroundSize: data.bg.size}}>
      {data.label}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} id={data.label} />
      <Handle
        type="source"
        position={Position.Bottom}
        id={data.label}
      />
    </div>
  );
}
