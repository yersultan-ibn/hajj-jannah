import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const roundedCheckbox = defineStyle((props) => {
  const blueMain = props.theme.colors.blue.main;

  return {
    control: {
      borderRadius: "50%",
      border: `1px solid ${blueMain}`,
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      transition: "none",
      backgroundColor: "transparent",
      _checked: {
        '&::before': {
          content: '""',
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: blueMain,
          position: "absolute",
        },
        backgroundColor: "transparent",
        borderColor: blueMain,
        _hover: {
          backgroundColor: "transparent",
          borderColor: blueMain,
        },
      },
      _hover: {
        backgroundColor: "transparent",
      },
    },
    icon: {
      display: 'none',
    },
  };
});

const squareCheckbox = defineStyle((props) => {
  const { colors } = props.theme;
  const blueMain = colors.blue.main;
  const greyPrimary = colors.grey.primary;

  return {
    control: {
      border: `2px solid ${greyPrimary}`,
      width: "18px",
      height: "18px",
      mr: '15px',
      _checked: {
        bg: blueMain,
        borderColor: blueMain,
        color: "white",
        _hover: {
          bg: blueMain,
          borderColor: blueMain
        }
      },
      borderColor: greyPrimary,
    },
  };
});
export const Checkbox = defineStyleConfig({
  baseStyle: {},
  variants: {
    rounded: roundedCheckbox,
    square: squareCheckbox,
  },
});
