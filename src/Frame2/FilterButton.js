
function FilterButton(){
return (
    <div id="filter_button">
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