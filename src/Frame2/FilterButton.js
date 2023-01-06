import "../Style/Frame2.css";
import { useEffect, useRef } from 'react';

function FilterButton(){
    const filterButton = useRef(null);
    const elementProjects = useRef(null);
  
    useEffect(() => {
      Array.from(filterButton.current).forEach(button => {
        button.addEventListener('click', event => {
          for (let i = 0; i < filterButton.current.length; i++) {
            filterButton.current[i].classList.remove('active');
          }
          event.target.classList.add('active');
  
          let buttonAttr = event.target.dataset.filter;
          Array.from(elementProjects.current).forEach(element => {
            let elementAttr = element.dataset.item;
            if (buttonAttr === elementAttr || buttonAttr === 'all') {
              element.style.display = 'block';
            } else {
              element.style.display = 'none';
            }
          });
        });
      });
    }, []);

return (
    <div>
    <a class="btn btn-primary active" data-filter="all">All</a>
    <a class="btn btn-primary" data-filter="web"> Web</a>
    <a class="btn btn-primary" data-filter="logo"> Logo</a>
    <a class="btn btn-primary" data-filter="banner">Banner</a>
    <a class="btn btn-primary" data-filter="video">Video</a>
    <a class="btn btn-primary" data-filter="sketch">Sketch</a>
  </div>
)
}
export default FilterButton;