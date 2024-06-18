import Box from "@mui/material/Box";
import SimpleAlert from "./components/Alert.tsx";

function App() {
  // const items = ["Brasilia", "São Paulo", "Belo Horizonte", "Rio de Janeiro"];
  // const handleSelect = (item: string) => {
  //   console.log(item);
  // };
  return (
    <Box>
      <SimpleAlert children="Hello World!" />
      {/*<ListGroup items={items} heading="Cidades" onSelect={handleSelect} />*/}
    </Box>
  );
}

export default App;
