import PostItem from "./PostItem";
import "../Style/Frame2.css";
import FilterButton from "./FilterButton";
import { useState, useRef } from 'react';

function Frame2() {
    const [items, setItems] = useState([
        { id: 1, type: 'fruit', name: 'Apple' },
        { id: 2, type: 'fruit', name: 'Banana' },
        { id: 3, type: 'vegetable', name: 'Carrot' },
        { id: 4, type: 'vegetable', name: 'Potato' },
        { id: 5, type: 'meat', name: 'Beef' },
        { id: 6, type: 'meat', name: 'Chicken' }
      ]);
      const [filteredItems, setFilteredItems] = useState(items);
    
      function handleFilterClick(event) {
        const type = event.target.dataset.filter;
        const filtered = items.filter(item => item.type === type);
        setFilteredItems(filtered);
      }
    
      return (
        <div>
          <button onClick={handleFilterClick} data-filter="fruit">
            Fruit
          </button>
          <button onClick={handleFilterClick} data-filter="vegetable">
            Vegetable
          </button>
          <button onClick={handleFilterClick} data-filter="meat">
            Meat
          </button>
          <ul>
            {filteredItems.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
}
export default Frame2;
