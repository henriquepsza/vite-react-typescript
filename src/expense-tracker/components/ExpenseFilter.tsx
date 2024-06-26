import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  onSelectCategory: (category: string) => void;
  category: string;
}

const ExpenseFilter = ({ onSelectCategory, category }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={"demo-simple-select-label"}>All categories</InputLabel>
      <Select
        labelId={"demo-simple-select-label"}
        id={"demo-simple-select"}
        value={category}
        label={"All categories"}
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <MenuItem value={""}>All categories</MenuItem>
        <MenuItem value={"Groceries"}>Groceries</MenuItem>
        <MenuItem value={"Utilities"}>Utilities</MenuItem>
        <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ExpenseFilter;
