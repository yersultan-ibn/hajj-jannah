import React, { FC } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, InputGroup, Link, Text } from "@chakra-ui/react";

type Props = {
  fileName: string;
  fileUrl: string;
  onClear: () => void;
};

export const UploadedFile: FC<Props> = ({ fileName, fileUrl, onClear }) => (
  <InputGroup>
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="md"
      p={2}
      _hover={{ borderColor: "blue.500" }}
      borderColor="grey.primary"
      fontWeight='700'
      bg='grey.default'
      px='20px'
    >
      <Link href={fileUrl} target="_blank" rel="noopener noreferrer">
        <Text>{fileName}</Text>
      </Link>
      <Button size="sm" onClick={onClear} bg='0' _active={{ bg: "" }} _hover={{ bg: "" }}>
        <CloseIcon color="blue.main" />
      </Button>
    </Box>
  </InputGroup>
);
