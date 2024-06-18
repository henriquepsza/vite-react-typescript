import Box from "@mui/material/Box";
import SimpleAlert from "./components/Alert.tsx";
import BasicButton from "./components/BasicButton.tsx";
import { useState } from "react";
import Like from "./components/Like.tsx";

function App() {
  // const items = ["Brasilia", "São Paulo", "Belo Horizonte", "Rio de Janeiro"];
  // const handleSelect = (item: string) => {
  //   console.log(item);
  // };
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Box>
      {/*{showAlert && (*/}
      {/*  <SimpleAlert*/}
      {/*    children="Hello World!"*/}
      {/*    onClose={() => setShowAlert(!showAlert)}*/}
      {/*  />*/}
      {/*)}*/}
      {/*/!*<ListGroup items={items} heading="Cidades" onSelect={handleSelect} />*!/*/}
      {/*<BasicButton*/}
      {/*  children={showAlert ? "Hide Alert" : "Show Alert"}*/}
      {/*  onClick={() => setShowAlert(!showAlert)}*/}
      {/*  variantType="outlined"*/}
      {/*/>*/}
      <Like onClick={() => console.log("Clicked")} />
    </Box>
  );
}

export default App;
