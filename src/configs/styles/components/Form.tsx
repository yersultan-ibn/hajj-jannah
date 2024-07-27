import { defineStyleConfig } from "@chakra-ui/react";

export const FormError = defineStyleConfig({
  baseStyle: {
    text: {
      marginTop: "4px",
      color: "red.500",
      fontSize: "xs",
    },
  },
  sizes: {
    sm: {
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
  },
  defaultProps: {
    size: "sm",
  },
});
