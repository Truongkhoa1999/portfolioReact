
import "../Style/Frame2.css";
import FilterButton from "./FilterButton";
import { useState, useRef } from 'react';
import jsdata from "../Data/Frame2Data.json"
import { Frame2Data } from "../Data/Frame2Data";
import PostConstructor from "./PostConstructor";

function Frame2() {
  const [items, setItems] = useState(jsdata.data);
  const [filteredItems, setFilteredItems] = useState(items);

  function handleFilterClick(event) {
    const type = event.target.dataset.filter;
    const filtered = items.filter(item => item.type === type);
    setFilteredItems(filtered);
  }

  return (
    <div className="frame2__wrapper" id="main">
      <section id="filter">
        <div id="filter_button"> <button className="btn btn-primary" onClick={handleFilterClick} data-filter="Ecommerce">
          Ecommerce
        </button>
          <button className="btn btn-primary" onClick={handleFilterClick} data-filter="Business">
            Business
          </button>
          <button className="btn btn-primary" onClick={handleFilterClick} data-filter="WebApp">
            WebApp
          </button> </div>
      </section>
      <div id="filter-data">
        
          {filteredItems.map(item => (
            <div id="filter-data"> 
             <article className="element_projects">
               <PostConstructor
              key={item.id}
              image={item.image}
              type={item.type}
              source={item.source} />
            </article>
            </div>
          )
          )
          }
      </div>
    </div>
  );
}
export default Frame2;
