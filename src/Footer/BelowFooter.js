// import FormFooter from "./FormFooter";
import "../Style/Footer.css";
import "../Style/Frame1.css";
import "../Style/App.css";


function BelowFooter() {
  return (
<div className="footer_background">
      <div className="frame3__below">
        <h1 className="header_title2 title-text">TRUONG KHOA - UX UI DESIGNER</h1>
        <p className="title-text2 upper__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nobis
          ipsam
          blanditiis
          iure voluptatem mollitia aperiam deserunt ipsum, nulla eos dolor quas nihil in ratione dolorum accusamus.
          Nemo,
          voluptate quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt sunt maiores beatae
          explicabo ipsam quasi labore, similique voluptas perferendis harum doloremque consectetur quia praesentium
          dolorem ipsum molestias? Voluptate, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          quasi
          sequi? Rem doloremque, tempora dicta similique beatae laborum eius architecto, illum placeat voluptas possimus
          excepturi eveniet, eos repudiandae obcaecati repellendus.</p>
        <br />
        <h1 className="header_title2 title-text">
          LET'S GET IN CONTACT.</h1>
        <form id="contact__form">
          <input type="text" id="fname" className="input__contact" name="fname" placeholder="Name*" required /><br />
          <input type="email" id="mail" className="input__contact" name="fname" placeholder="E-Mail*" required /><br />
          <input type="text" id="subject" className="input__contact" name="fname" placeholder="Subject" /><br />
          <input type="text" id="message" className="input__contact" name="fname" placeholder="Message" /><br />
          <button className="button__contact btn" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
export default BelowFooter;
