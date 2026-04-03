import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function Dashboard() {
    const {transactions}=useContext(AppContext)
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b"];
  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (t.type === "expense") {
        acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
        acc[t.category].value += t.amount;
      }
      return acc;
    }, {}),
  ).map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length],
  }));
  return (
    <div className="dashboard">
      <div className="cards-container">
        <div className="card">Balance:₹{balance}</div>
        <div className="card">Income:₹{income}</div>
        <div className="card">Expense:₹{expense}</div>
      </div>

      <div className="charts-container">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={transactions}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                <Tooltip />
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
