import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const chat = defineStyle({
  borderRadius: "8px",
  padding: "2px 34px",
  background: "#DBDFEB",
  textWrap: "wrap",
  textAlign: "center",
  textTransform: "none",
  color: "#414350",
  fontSize: "0.875rem",
  fontWeight: 500,
  whiteSpace: "wrap",
});

export const Badge = defineStyleConfig({
  variants: { chat },
});
