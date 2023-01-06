import "../Style/PostTemplate.css";
import jsdata from "../Data/Frame2Data.json"
function PostConstructor(props) {
  return (
    <div>
      <article class="element_projects" data-item="web">
        <a href={props.source} target="_blank" rel="noreferrer">
          <div className="post__item">
            <div className="infor">
              <img className="post__image" src={props.image} alt="" />
              <h1 className="name_item">{props.title}</h1>
              <h1 className="type">{props.type}</h1>
              <div id="logo__wrapper">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3"></i>
              </div>
            </div>
          </div>
        </a>
      </article>
    </div>
  );
}
export default PostConstructor;
