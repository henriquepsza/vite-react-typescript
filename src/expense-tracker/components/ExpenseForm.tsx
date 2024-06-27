import { Button, Container, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ExpenseFilter from "./ExpenseFilter.tsx";
import { useState } from "react";
import categories from "../Categories.ts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onAddExpense: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onAddExpense }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: ExpenseFormData) => {
    if (selectedCategory) {
      onAddExpense({ ...data, category: selectedCategory });
      setValue("description", ""); // Clear the description field
      setValue("amount", 0); // Clear the amount field
      setSelectedCategory(""); // Clear the category selection
    } else {
      console.error("Category is not selected");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant={"h4"} component={"h1"} gutterBottom>
          Cadastro
        </Typography>
      </Box>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
        <TextField
          {...register("description")}
          margin={"normal"}
          fullWidth
          label="Description"
          variant="outlined"
          error={!!errors.description}
          helperText={errors.description ? errors.description.message : ""}
        />
        <TextField
          {...register("amount", { valueAsNumber: true })}
          margin={"normal"}
          fullWidth
          label="Amount"
          variant="outlined"
          error={!!errors.amount}
          helperText={errors.amount ? errors.amount.message : ""}
        />
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category) =>
            setSelectedCategory(category as ExpenseFormData["category"])
          }
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
