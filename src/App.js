import "./Style/App.css";
import Frame1 from "./Frame1/Frame1.js";
import Frame2 from "./Frame2/Frame2.js";
import Frame3 from "./Frame3/Frame3.js";
import Footer from "./Footer/Footer.js";


function App() {
  return (
    <div className="mainWrapper">
      <Frame1 id="frame1__wrapper"/>
      <Frame2 id="frame2__wrapper"/>
      <Frame3 id="frame3__wrapper" />
      <Footer id="footer"/>
    </div>
  );
}

export default App;
