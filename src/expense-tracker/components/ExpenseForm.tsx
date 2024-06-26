import { Button, Container, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ExpenseFilter from "./ExpenseFilter.tsx";
import { useState } from "react";
import categories from "../Categories.ts";

const ExpenseForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant={"h4"} component={"h1"} gutterBottom>
          Cadastro
        </Typography>
      </Box>
      <Box component={"form"} onSubmit={() => console.log()} sx={{ mt: 1 }}>
        <TextField
          margin={"normal"}
          fullWidth
          label="Description"
          variant="outlined"
        />
        <TextField
          margin={"normal"}
          fullWidth
          label="Amount"
          variant="outlined"
        />
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category) => setSelectedCategory(category)}
          category={selectedCategory}
        />
        <Button
          sx={{ mt: 3, mb: 2 }}
          type={"submit"}
          variant={"contained"}
          color={"primary"}
        >
          Cadastro
        </Button>
      </Box>
    </Container>
  );
};

export default ExpenseForm;
