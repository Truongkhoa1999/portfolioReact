
import '../Style/Frame1.css'
import '../Style/Nav.css'


function Nav () {
    return (
        <nav id="nav__wrapper">
          <ul>
            <a className="nav_link" href="#header__wrapper">
              <li className="nav__btn">Start</li>
            </a>
            <a className="nav_link" href="#main">
              <li className="nav__btn">Projects</li>
            </a>
            <a className="nav_link" href="#footer">
              <li className="nav__btn">Contact</li>
            </a>
          </ul>
        </nav>
    )

}
export default Nav;