import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";

export default function Transactions() {
  const { transactions, setTransactions, role, search, setSearch } =
    useContext(AppContext);

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()),
  );
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="transactions">
      <h2>Transactions</h2>

      <input
        type="text"
        placeholder="Search by category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5">No transactions found</td>
            </tr>
          ) : (
            filtered.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td className={t.type === "income" ? "income" : "expense"}>
                  {t.type}
                </td>

                {role === "admin" && (
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        handleDelete(t.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
