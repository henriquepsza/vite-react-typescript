import ExpenseList from "./components/ExpenseList.tsx";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";
import ExpenseForm from "./components/ExpenseForm.tsx";
import categories from "./Categories.ts";

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
      category: "Groceries",
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
      category: "Entertainment",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { id: expenses.length + 1, ...newExpense }]);
  };

  return (
    <>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseFilter
        categories={categories}
        onSelectCategory={(category) => setSelectedCategory(category)}
        category={selectedCategory}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default ExpensePage;
