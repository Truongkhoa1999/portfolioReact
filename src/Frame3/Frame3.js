import Frame3Constructor from "./Frame3Constructor.js";
import { Frame3Data } from "../Data/Frame3Data.js";
import "../Style/Frame1.css";
import "../Style/Frame3.css";

function Frame3() {
  return (
    <div id="frame_about" >
      {Frame3Data.map((item) => (
        <Frame3Constructor
          key={item.id}
          image={item.image}
          title={item.title}
          info={item.info}
        />
      ))}
    </div>
  );
}
export default Frame3;
