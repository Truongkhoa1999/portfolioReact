import "../Style/Footer.css";
import "../Style/Frame1.css";
function FormFooter () {
    return (
        <form id="contact__form">
        <input type="text" id="fname" className="input__contact" name="fname" placeholder="Name*" required /><br/>
        <input type="email" id="mail" className="input__contact" name="fname" placeholder="E-Mail*" required /><br/>
        <input type="text" id="subject" className="input__contact" name="fname" placeholder="Subject" /><br />
        <input type="text" id="message" className="input__contact" name="fname" placeholder="Message" /><br />
        <button class="button__contact btn" type="submit">SUBMIT</button>
      </form>
    )
}
export default FormFooter;