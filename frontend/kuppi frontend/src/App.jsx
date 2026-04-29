import { useEffect, useState } from 'react';
import { getItems } from './api';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import './App.css';
function App() {
const [items, setItems] = useState([]);
const fetchItems = async () => {
  try {
    const res = await getItems();
    setItems(res.data);
  } catch (err) {
    console.error('Failed to fetch items:', err && err.message ? err.message : err);
    // keep items as-is (empty) so UI doesn't crash
  }
};

useEffect(() => {
  fetchItems();
}, []);
return (
  <div className="app-container">
    <h1>Item Manager</h1>
    <ItemForm onItemAdded={fetchItems} />
    <ItemList items={items} onRefresh={fetchItems} />
  </div>
);
}
export default App;