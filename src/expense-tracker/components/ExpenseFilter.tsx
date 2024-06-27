import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
  category: string;
}

const ExpenseFilter = ({ categories, onSelectCategory, category }: Props) => {
  return (
    <FormControl fullWidth margin={"normal"}>
      <InputLabel id={"demo-simple-select-label"}>All categories</InputLabel>
      <Select
        labelId={"demo-simple-select-label"}
        id={"demo-simple-select"}
        value={category}
        label={"All categories"}
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <MenuItem value={""}>All categories</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ExpenseFilter;
