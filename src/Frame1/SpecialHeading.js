import { useState, useEffect } from 'react';
import '../Style/Frame1.css'
import '../Style/Specialheading.css'

function SpecialHeading() {
    const [text, setText] = useState('Hello;');
  
    useEffect(() => {
      const interval = setInterval(() => {
        switch (text) {
          case "Hello;":
            setText("Ola;");
            break;
          case "Ola;":
            setText("Xin Chào;");
            break;
          case "Xin Chào;":
            setText("Moi;");
            break;
          case "Moi;":
            setText("Bonjour;");
            break;
          case "Bonjour;":
            setText("Ciao;");
            break;
          case "Ciao;":
            setText("你 好;");
            break;
          case "你 好;":
            setText("Привет");
            break;
          default:
            setText("Hello;");
        }
      }, 2000);
  
      return () => clearInterval(interval);
    }, [text]);
  
    return (
      <div>
       <div id="frame1_heading" className="header_title">
        {text}
      </div>
      <p class="header_des title-text2">I'M TRUONG KHOA, UX UI GRAPHIC DESIGNER</p>
      </div>
    );
  }
export default SpecialHeading;
  
  
  
  
  