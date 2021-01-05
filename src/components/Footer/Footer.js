import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer" id="footer">
        <div class="footer-copyright">
          <div id="w" class="container">
            2021, todos os direitos reservados.
            <a class="grey-text text-lighten-4 right" href="/">
            Listen.to ©
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
