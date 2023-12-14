import React from "react";
import { Link } from "gatsby";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    //const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div className="site-wrapper">
        <header className="site-head">
          <div className="site-head-container">
            <Link className="nav-burger" to={`/`}>
              <div
                className="hamburger hamburger--collapse"
                aria-label="Menu"
                role="button"
                aria-controls="navigation"
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </Link>
            <nav>
              <div id="swup" className="site-head-left">
                <ul>
                  {" "}
                  <div className="nav" role="menu">
                    <li>
                      <div
                        className={
                          location === "home"
                            ? "nav-home nav-current"
                            : "nav-home"
                        }
                        role="menuitem"
                      >
                        <Link
                          to={`/`}
                          activeClassName={"nav-current"}
                          replace={true}
                        >
                          Home
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          location === "about"
                            ? "nav-about nav-current"
                            : "nav-about"
                        }
                        role="menuitem"
                      >
                        <Link
                          to={`/about`}
                          activeClassName={"nav-current"}
                          replace={true}
                        >
                          About
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          location === "tech"
                            ? "nav-tech nav-current"
                            : "nav-tech"
                        }
                        role="menuitem"
                      >
                        <Link
                          to={`/tech`}
                          activeClassName={"nav-current"}
                          replace={true}
                        >
                          Tech
                        </Link>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="nav-elements" role="menuitem">
                        <a href="mailto:eric@ericspark.com">Contact</a>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </nav>
            <div className="site-head-center">
              <Link className="site-head-logo" to={`/`}>
                {title}
              </Link>
            </div>
            <div className="site-head-right">
              <div className="social-links">
                <a
                  href="https://www.github.com/ericpark"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/ericspark"
                  title="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href="https://www.instagram.com/meeko_the_auss/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main">
          <div id="swup" className="transition-fade">
            {children}
          </div>
        </main>
        <footer className="site-foot">
          &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>{" "}
          &mdash; Built with{" "}
          <a
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </footer>
      </div>
    );
  }
}

export default Layout;
