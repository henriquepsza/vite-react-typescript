import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

export default function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent, index: number) => {
  //   console.log(index);
  //   setSelectedIndex(index);
  // };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography variant="h3">{heading}</Typography>
      {items.length === 0 && <Typography>{heading}</Typography>}
      <List>
        {items.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          >
            <ListItem id={index.toString()} key={index}>
              {item}
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
