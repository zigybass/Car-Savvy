const React = require("react");

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="grey darken-1">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              CarSavvy
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
