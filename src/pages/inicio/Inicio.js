import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";

class Inicio extends Component {
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
            <form
              action="http://localhost:5000/login" // Encaminha para o endereço de login da API
              method="get"
              name="loginForm"
            >
              <h4 className="text-center">Entre agora</h4>
              <hr />
              <div className="form-group">
                <button className="btn btn-primary btn-block">
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
