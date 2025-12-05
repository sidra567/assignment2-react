# React Assignment – Button Alert

This project is a simple React application created with **Create React App**.  
It displays a button, and when the user clicks it, an alert message appears.

---

## 🚀 Features
- Create React App setup  
- A single button labeled **"Click Me"**  
- Click event triggers an alert message  
- Simple beginner-friendly code  

---

## 🧩 Code (App.js)

```jsx
import React from "react";

function App() {
  function showAlert() {
    alert("Hello from React!");
  }

  return (
    <div>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}

export default App;
