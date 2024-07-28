import { Handle, Position } from '@xyflow/react';

const NodeStyle = {
  backgroundColor: "#0000007d",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 80%",
  color: "white",
  display: "flex",
  justifyContent: "center",
  borderRadius: 15,
  paddingTop: 10,
  textAlign: "center",
  fontSize: 10
}

type Props = {
  data: {
    label: string;
    width: number;
    height: number;
    bg: {
      url: string;
      size: number
    }
  }
}
export  const CustomNode = ({ data }: Props) =>  {
  console.log(data.bg.size)
  return (
    <div style={{...NodeStyle, backgroundImage: `url(${data.bg.url})`, backgroundSize: data.bg.size, width: data.width, height: data.height}}>
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
