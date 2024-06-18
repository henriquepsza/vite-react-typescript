import ListGroup from "./components/ListGroup.tsx";
import Box from "@mui/material/Box";

function App() {
  const items = ["Brasilia", "São Paulo", "Belo Horizonte", "Rio de Janeiro"];
  const handleSelect = (item: string) => {
    console.log(item);
  };
  return (
    <Box>
      <ListGroup items={items} heading="Cidades" onSelect={handleSelect} />
    </Box>
  );
}

export default App;
