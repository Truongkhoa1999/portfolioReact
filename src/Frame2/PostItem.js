import PostConstructor from "./PostConstructor.js";
import { Frame2Data } from "../Data/Frame2Data.js";
import "../Style/Frame2.css";
function PostItem() {
  return Frame2Data.map((item) => (
    <PostConstructor 
      key={item.id}
      image={item.image}
      title={item.title}
      type={item.type}
    />
  ));
}
export default PostItem;
