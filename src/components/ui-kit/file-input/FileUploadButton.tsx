import React, { FC } from "react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  index: number;
  isMultiple: boolean;
  name: string;
  isDisabled: boolean;
  accept?: string;
  placeholder?: string;
}

export const FileUploadButton: FC<Props> = ({ onChange, index, isMultiple, name, isDisabled, accept, placeholder }) => {
  const { t } = useTranslation("common", { keyPrefix: "fileInput" });

  return (
    <InputGroup>
      <Box
        as="label"
        htmlFor={`file-upload-${index}`}
        width="100%"
        cursor={isDisabled ? "not-allowed" : "pointer"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderWidth="1px"
        borderRadius="md"
        p={2}
        _hover={{ borderColor: isDisabled ? "grey" : "blue.500" }}
        background='grey.default'
        h='48px'
        px='20px'
        // Предотвращение открытия окна выбора файла
        onClick={e => isDisabled && e.preventDefault()}
      >
        <Input
          type="file"
          name={`${name}-${index}`}
          onChange={(event) => onChange(event, index)}
          display="none"
          id={`file-upload-${index}`}
          accept={accept}
          multiple={isMultiple}
          disabled={isDisabled}
          background='grey.default'
          h='48px'
          fontSize="md"
        />
        <Text color="grey.primary">
          {placeholder || (isMultiple ? (index > 0 ? t('uploadMore') : t('uploadFiles')) : t('uploadFile'))}
        </Text>
        <AttachmentIcon color={isDisabled ? 'grey' : 'blue.main'} />
      </Box>
    </InputGroup>
  );
};
