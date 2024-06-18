import Alert from "@mui/material/Alert";
// import CheckIcon from "@mui/icons-material/Check";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose?: () => void;
}

export default function SimpleAlert({ children, onClose }: Props) {
  return (
    <Alert severity="info" onClose={onClose}>
      {children}
    </Alert>
  );
}
