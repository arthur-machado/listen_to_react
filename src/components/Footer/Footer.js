import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer" id="footer">
        <div className="footer-copyright">
          <div id="w" className="container">
            2021, todos os direitos reservados.
            <a className="grey-text text-lighten-4 right" href="/">
            Listen.to ©
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
