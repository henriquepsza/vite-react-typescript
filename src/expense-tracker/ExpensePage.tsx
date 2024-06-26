import ExpenseList from "./components/ExpenseList.tsx";
import { useState } from "react";

// function createData(
//   id: number,
//   description: string,
//   amount: number,
//   category: string,
// ) {
//   return { id, description, amount, category };
// }
//
// const rows = [
//   createData(1, "aaa", 10, "Utilities"),
//   createData(2, "bbb", 15, "Utilities"),
//   createData(3, "ccc", 20, "Utilities"),
//   createData(4, "ddd", 25, "Utilities"),
// ];

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 20,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 15,
      category: "Utilities",
    },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
};

export default ExpensePage;
