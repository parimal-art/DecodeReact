# 📦 Props Drilling with Map (React + Tailwind)

## 🚀 Introduction

This project demonstrates **Props Drilling in React** using a realistic scenario where multiple users are passed through nested components and rendered using the `map()` function.

It also shows **both ways of using props**:

* Normal `props.user`
* Destructuring `{ user }`

---

## 🎯 Objective

* Understand Props Drilling
* Learn difference between `props` and destructuring
* Use `.map()` to render list data
* Identify problem in intermediate components

---

## ⚙️ Project Setup

### 1. Create Project (Vite)

```bash
npm create vite@latest propsapp
cd propsapp
npm install
npm run dev
```

### 2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind

**tailwind.config.js**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📁 Folder Structure

```
src/
 ├── App.jsx
 ├── Dashboard.jsx
 ├── Sidebar.jsx
 ├── UserList.jsx
 ├── UserCard.jsx
```

---

## 🔄 Data Flow Overview

```
App (users array)
  ↓
Dashboard (props.users)
  ↓
Sidebar ({ users }) ❌ not used
  ↓
UserList ({ users }) → map()
  ↓
UserCard ({ user }) ✅ used
```

---

## 💻 Complete Code

### 1️⃣ App.jsx (Data Source)

```jsx
import React from "react";
import Dashboard from "./Dashboard";

function App() {
  const users = [
    { id: 1, name: "Parimal", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
    { id: 3, name: "Amit", age: 21 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-[500px]">
        <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          Props Drilling with Map 🚀
        </h1>

        <Dashboard users={users} />
      </div>
    </div>
  );
}

export default App;
```

---

### 2️⃣ Dashboard.jsx (Using Normal Props)

```jsx
import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = (props) => {
  return (
    <div className="border-2 border-blue-400 p-4 rounded-xl mb-3">
      <h2 className="text-lg font-semibold text-blue-600 mb-2">Dashboard</h2>

      <Sidebar users={props.users} />
    </div>
  );
};

export default Dashboard;
```

---

### 3️⃣ Sidebar.jsx (Using Destructuring, Not Using Data ❗)

```jsx
import React from "react";
import UserList from "./UserList";

const Sidebar = ({ users }) => {
  return (
    <div className="border-2 border-green-400 p-4 rounded-xl mb-3">
      <h3 className="text-md font-semibold text-green-600 mb-2">
        Sidebar (not using data)
      </h3>

      <UserList users={users} />
    </div>
  );
};

export default Sidebar;
```

---

### 4️⃣ UserList.jsx (Using Destructuring + map)

```jsx
import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div className="border-2 border-yellow-400 p-4 rounded-xl mb-3">
      <h4 className="text-md font-semibold text-yellow-600 mb-2">
        User List
      </h4>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
```

---

### 5️⃣ UserCard.jsx (Final Consumer)

```jsx
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border border-red-400 p-3 rounded-lg mb-2">
      <p className="font-bold text-red-600">Name: {user.name}</p>
      <p className="text-gray-700">Age: {user.age}</p>
    </div>
  );
};

export default UserCard;
```

---

## ⚖️ Props Usage Summary

| Component | Props Style Used |
| --------- | ---------------- |
| Dashboard | props.users      |
| Sidebar   | { users }        |
| UserList  | { users }        |
| UserCard  | { user }         |

---

## ❌ Props Drilling Problem

* Sidebar does not use users
* Still receives and passes it
* Creates unnecessary dependency

---

## 🚀 When It Becomes Problematic

* Deep component tree
* Multiple props
* Large datasets

---

## 💡 Solution

* Context API
* Redux (for large apps)

---

## 🎯 Interview Definition

Props drilling is the process of passing data from parent to deeply nested child components through intermediate components that do not use the data.

---

## 🎬 Conclusion

This project clearly shows how data flows through multiple layers and highlights the inefficiency of props drilling, especially when working with arrays and dynamic rendering using `map()`.
