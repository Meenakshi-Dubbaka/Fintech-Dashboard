import { useState } from "react";
import { AppContext } from "./context/AppContext";
import { transactions as initialData } from "./data/mockData";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const providerValues = {
    transactions,
    setTransactions,
    role,
    setRole,
    search,
    setSearch,
  };

  return (
    <AppContext.Provider value={providerValues}>
      <Navbar></Navbar>
      <Dashboard />
      <Transactions />
      <Insights />
    </AppContext.Provider>
  );
}

export default App;
