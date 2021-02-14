import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";

class Inicio extends Component {
  redirect() {
    window.location.href="http://localhost:8888/login"
  };

  render() {
    return (
      <div className="background">
        <div className="container">
          <Navbar isIndexPage />
          <div className="disclaimer">
            <p id="frontText">
              Veja o que os seus amigos estão ouvindo.
              <br />
              Avalie a música. <br />
              Compartilhe suas descobertas.
              <br />
            </p>
          </div>

          <div className="login-form">
            <form action="/feed" method="get" name="loginForm">
              <h4 class="text-center">Entre agora</h4>
              <hr />
              <div class="form-group">
                <button class="btn btn-primary btn-block" onClick={this.redirect}>
                  Entrar com Spotify
                </button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Inicio;
