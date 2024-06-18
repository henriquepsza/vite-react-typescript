import { Button } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variantType?: "outlined" | "text" | "contained";
  color?: "success" | "error";
}

export default function BasicButton({
  children,
  onClick,
  variantType,
  color,
}: Props): React.ReactNode {
  return (
    <Button variant={variantType} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}
