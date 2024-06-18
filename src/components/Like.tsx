import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState<boolean>(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <FavoriteIcon color="secondary" fontSize="large" onClick={toggle} />;
  return (
    <FavoriteBorderIcon color="secondary" fontSize="large" onClick={toggle} />
  );
};

export default Like;
