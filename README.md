# Finance Dashboard

##  Features

###  Dashboard Overview
- Displays **Total Balance, Income, and Expenses**
- Line chart showing **financial trend over time**
- Pie chart showing **category-wise spending breakdown**

###  Transactions Section
- View all transactions with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)
-  Search functionality (filter by category)
-  Delete transactions (Admin only)

###  Role-Based UI
- Toggle between:
  - **Viewer** → Read-only access
  - **Admin** → Can delete transactions
- UI updates dynamically based on selected role

###  Insights
- Shows:
  - Highest spending category
  - Total expenses
  - Spending observations

---

##  Key Concepts Implemented

- Context API for global state management
- Dynamic data calculations (balance, income, expense)
- Data visualization using charts
- Conditional rendering (role-based UI)
- Controlled inputs (search functionality)

##  Tech Stack

- **Frontend:** React
- **Styling:** CSS
- **Charts:** Recharts

## Setup
cd dashboard-app
npm install  
npm run dev
