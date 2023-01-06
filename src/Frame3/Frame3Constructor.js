import "../Style/Frame1.css";
import "../Style/Frame2.css";

function Frame3Constructor(props) {
  return (
    <div id="filter-data">
      <section id="about">
      <div>
        <div className="about_column">
          <img className="about_logo" src={props.image} alt="Illustratrion" />
          <div className="about_content">
            <h1 className="about_heading">{props.title}</h1>
            <p className="about_title">{props.info}</p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}
export default Frame3Constructor;
