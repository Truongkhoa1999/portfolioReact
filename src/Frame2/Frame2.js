import "../Style/Frame2.css";
import FilterButton from "./FilterButton";
import { useState, useRef } from "react";
import jsdata from "../Data/Frame2Data.json";
import { Frame2Data } from "../Data/Frame2Data";
import PostConstructor from "./PostConstructor";

function Frame2() {
  const [items, setItems] = useState(jsdata.data);
  const [filteredItems, setFilteredItems] = useState(items);
  // add class to button
  const [buttonClass, setButtonClass] = useState("btn btn-primary");
  function addClass() {
    setButtonClass("btn btn-primary active");
  }

  function handleFilterClick(event) {
    const type = event.target.dataset.filter;
    const filtered = items.filter((item) => item.type === type);
    setFilteredItems(filtered);
    setButtonClass("btn btn-primary");
  }
  function handleShowAllClick() {
    setFilteredItems(items);
    addClass();
  }
  return (
    <div className="frame2__wrapper" id="main">
      <section id="filter">
        <div id="filter_button">
          <button className={buttonClass} onClick={handleShowAllClick}>
            All
          </button>
          <button
            className={buttonClass}
            onClick={handleFilterClick}
            data-filter="Ecommerce"
          >
            Ecommerce
          </button>
          <button
            className="btn btn-primary"
            onClick={handleFilterClick}
            data-filter="Business"
          >
            Business
          </button>
          <button
            className="btn btn-primary"
            onClick={handleFilterClick}
            data-filter="Logo"
          >
            Logo
          </button>{" "}
        </div>
      </section>
      <div id="filter-data">
        {filteredItems.map((item) => (
          <div id="filter-data">
            <article className="element_projects">
              <PostConstructor
                key={item.id}
                title={item.title}
                image={item.image}
                type={item.type}
                source={item.source}
              />
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frame2;
