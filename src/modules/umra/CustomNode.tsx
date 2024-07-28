import { Handle, Position } from "@xyflow/react";
import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useRouter } from "next/router";

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialFocusRef: any = useRef();

  const router = useRouter()

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
        placement="auto"
        closeOnBlur={false}
        trigger="hover"
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
              <Button colorScheme="green" onClick={onOpen}>Details</Button>
              <Button colorScheme="blue" ref={initialFocusRef} onClick={() => {
                router.push("/test")
              }}>
                Practice
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>

     <Modal onClose={onClose} size='md' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa consequatur nostrum quo, delectus iusto eos suscipit ipsam provident repudiandae odio laudantium ipsum amet, impedit illum dolorem id quidem. Architecto.
            Ducimus nobis voluptates consectetur blanditiis impedit perspiciatis libero eius dignissimos nesciunt saepe voluptatum eligendi qui placeat eaque inventore earum, optio voluptate itaque officiis modi veritatis recusandae. Quae nemo optio delectus.
            Veritatis iure excepturi sapiente tenetur porro officia id rerum! Nesciunt distinctio doloribus quos facere voluptatibus, beatae corrupti dolorum sequi, impedit in hic necessitatibus minus molestiae dolore voluptatum laboriosam amet illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique? Culpa deserunt quia, perspiciatis nesciunt assumenda aliquam neque, tempore consectetur quaerat aut ipsam hic, dolores molestias autem asperiores! Voluptate, laboriosam.
            Repellendus nostrum officia libero, earum inventore laudantium quasi soluta, laboriosam, repudiandae sed non eaque obcaecati cum rerum maxime possimus explicabo aut perspiciatis dolore nulla animi iste suscipit. Voluptate, repudiandae ducimus.
            Similique modi animi maxime atque porro culpa corrupti esse eos ullam molestiae debitis eum cumque laudantium, veritatis, officia, repellendus voluptatum quaerat nisi odit reiciendis quidem nostrum optio! Debitis, magni repudiandae?
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
