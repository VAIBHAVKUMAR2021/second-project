import React, { useState } from "react";

function GroceryList() {
  const [item, setItem] = useState("");    
  const [groceryList, setGroceryList] = useState([]);

  const handleAddItem = () => {
    if (!item.trim()) return;
    setGroceryList([...groceryList, item]);
    setItem("");
  };

  return (
    <div style={styles.container}>
      <h2>Grocery List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter grocery item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleAddItem} style={styles.button}>
          Add
        </button>
      </div>

      <ul>
        {groceryList.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>

      <p>Total Items: {groceryList.length}</p>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "5px",
  },
  button: {
    padding: "6px 12px",
    cursor: "pointer",
  },
};

export default GroceryList;
