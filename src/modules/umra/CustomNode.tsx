import { Handle, Position } from "@xyflow/react";
import {
  Box,
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

const NodeStyle: any = {
  position: "relative",
  textAlign: "center",
  backgroundColor: "#0000007d",
  backgroundRepeat: "no-repeat",
  color: "white",
  display: "flex",
  justifyContent: "center",
  borderRadius: 15,
  paddingTop: 10,
  fontSize: 10,
};

const popoverTriggerStyle:any = {
  position: "absolute",
  top: 0,
  height: "100%",
  left: 0,
  right: 0,
  background: "red",
  opacity: 0
}

type Props = {
  id: string
  data: {
    label: string;
    width: number;
    height: number;
    bg: {
      url: string;
      size: number;
      position?: string;
    };
  };
};
export const CustomNode = (props: Props) => {
  const { data } = props
  const initialFocusRef: any = React.useRef();

  return (
    <div
      style={{
        ...NodeStyle,
        backgroundImage: `url(${data.bg.url})`,
        backgroundSize: data.bg.size,
        backgroundPosition: data.bg.position ? data.bg.position : "center 80%",
        width: data.width,
        height: data.height,
      }}
    >
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={false}
      >
        {/* <NodeToolbar isVisible>
        Toolbar
      </NodeToolbar> */}
        {data.label}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} id={data.label} />
      <Handle type="source" position={Position.Bottom} id={data.label} />

        <PopoverTrigger>
          <Button style={popoverTriggerStyle} />
        </PopoverTrigger>

        <PopoverContent
          id="test"
          color="white"
          bg="blue.800"
          borderColor="blue.800"
        >
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            {data.label}
          </PopoverHeader>
          <PopoverArrow bg="blue.800" />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </PopoverBody>
          <PopoverFooter
            border="0"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={4}
          >
            <Box fontSize="sm">Step {props.id} of 5</Box>
            <ButtonGroup size="sm">
              <Button colorScheme="green">Details</Button>
              <Button colorScheme="blue" ref={initialFocusRef}>
                Practice
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  );
};
