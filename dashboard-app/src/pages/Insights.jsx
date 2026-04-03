import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="insights">
      <h2>Insights</h2>

      {highest ? (
        <>
          <p>
            Highest Spending: <strong>{highest[0]}</strong> (₹{highest[1]})
          </p>

          <p>
            Total Expenses: <strong>₹{totalExpense}</strong>
          </p>

          <p>
            Observation: You are spending more on <strong>{highest[0]}</strong>.
          </p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
