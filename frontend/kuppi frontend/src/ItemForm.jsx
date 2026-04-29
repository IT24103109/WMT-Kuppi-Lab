import { useState } from 'react';
import { createItem } from './api';

export default function ItemForm({ onItemAdded }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(''); // ✅ added

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createItem({ 
      name, 
      description, 
      price: Number(price) // ✅ convert to number
    });

    setName('');
    setDescription('');
    setPrice(''); // ✅ reset
    onItemAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}