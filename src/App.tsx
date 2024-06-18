import ListGroup from "./components/ListGroup.tsx";
import Box from "@mui/material/Box";

function App() {
  const items = ["Brasilia", "São Paulo", "Belo Horizonte", "Rio de Janeiro"];
  return (
    <Box>
      <ListGroup items={items} heading="Cidades" />
    </Box>
  );
}

export default App;
