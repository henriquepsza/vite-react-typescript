import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SimpleAlert({ children }: Props) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      {children}
    </Alert>
  );
}
