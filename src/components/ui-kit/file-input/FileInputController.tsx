import { FC, useEffect, useState } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { UploadedFile } from "./UploadedFile";
import { FileUploadButton } from "src/components";
import { FormikHelpers } from "formik";

type Props = {
  isError: boolean;
  setFieldValue: FormikHelpers<any>['setFieldValue'];
  value: File[] | File;
  name: string;
  label?: string;
  helperText?: string;
  isMultiple?: boolean;
  isDisabled?: boolean;
  accept?: string;
  onFileChange?: (file: File | File[]) => void;
  placeholder?: string;
};

export const FileInputController: FC<Props> = ({
  isError,
  setFieldValue,
  value,
  isDisabled = false,
  name,
  label,
  accept = 'application/pdf',
  helperText,
  isMultiple = false,
  onFileChange,
  placeholder
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  useEffect(() => {
    if (value) {
      const initialFileNames = Array.isArray(value) ? value.map(file => file.name) : [value.name];
      const initialFileUrls = Array.isArray(value) ? value.map(file => URL.createObjectURL(file)) : [URL.createObjectURL(value)];
      setFileNames(initialFileNames);
      setFileUrls(initialFileUrls);
    } else {
      setFileNames([]);
      setFileUrls([]);
    }
  }, [value]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    const selectedFiles = isMultiple ? files : files[0];
    const updatedFileNames = files.map(file => file.name);
    const updatedFileUrls = files.map(file => URL.createObjectURL(file));

    setFileNames(updatedFileNames);
    setFileUrls(updatedFileUrls);
    setFieldValue(name, selectedFiles);

    if (onFileChange) {
      onFileChange(selectedFiles);
    }
  };

  const clearFile = (index: number) => {
    const updatedFileNames = [...fileNames];
    const updatedFileUrls = [...fileUrls];
    updatedFileNames.splice(index, 1);
    updatedFileUrls.splice(index, 1);

    setFileNames(updatedFileNames);
    setFileUrls(updatedFileUrls);

    if (isMultiple) {
      const updatedFiles = (value as File[]).filter((_, i) => i !== index);
      setFieldValue(name, updatedFiles);
    } else {
      setFieldValue(name, null);
    }
  };

  return (
    <FormControl isInvalid={isError} w='100%'>
      <FormLabel>
        <Text fontSize='md' color='grey.primary' ml='12px' align='left' w='100%'>{label}</Text>
      </FormLabel>
      <VStack spacing={2} align="stretch">
        {fileNames.map((fileName, index) => (
          <UploadedFile
            key={index}
            fileName={fileName}
            fileUrl={fileUrls[index]}
            onClear={() => clearFile(index)}
          />
        ))}

        {!fileNames.length && (
          <FileUploadButton
            placeholder={placeholder}
            onChange={handleFileChange}
            index={0}
            isMultiple={isMultiple}
            name={String(name)}
            isDisabled={isDisabled}
            accept={accept}
          />
        )}
      </VStack>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
