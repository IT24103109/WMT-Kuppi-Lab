import { deleteItem } from './api';

export default function ItemList({ items, onRefresh }) {

  const handleDelete = async (id) => {
    await deleteItem(id);
    onRefresh();
  };

  return (
    <div className="items-list">
      {items.map(item => (
        <div key={item._id} className="item-card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}