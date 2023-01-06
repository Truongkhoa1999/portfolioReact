import "../Style/Frame1.css";
import SpecialHeading from "./SpecialHeading.js";
import Myvideo from "./Myvideo.js";
import Nav from "./Nav.js";
import Centerwrapper from "./Centerwrapper";

function Frame1() {
  return (
    <div id="frame1__wrapper">
      <Myvideo />
      <Nav />
      <header id="header__wrapper">
        <Centerwrapper />
        <div id="heading">
          <SpecialHeading />
        </div>
      </header>
    </div>
  );
}

export default Frame1;
