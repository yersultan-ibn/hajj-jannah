import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const chat = defineStyle({
  color: "#222",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const badgeTheme = defineStyleConfig({
  variants: { chat },
});
