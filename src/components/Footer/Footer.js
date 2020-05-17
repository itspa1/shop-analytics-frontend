/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright">
<<<<<<< Updated upstream
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" />
            {/* by{" "} */}
            {/* <a
              href="https://ksit.ac.in"
=======
            {/* © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> */}
            by{" "}
            <a
              href="http://www.ksit.ac.in/"
>>>>>>> Stashed changes
              target="_blank"
            >
              KSIT
            </a>
            {" "}
<<<<<<< Updated upstream
            for a better web. */}
=======
            for a better web.
>>>>>>> Stashed changes
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
