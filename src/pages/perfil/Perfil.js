import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { API } from "../../utils/api";
import "./styles.css";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = { userData: [] };
  }

  getUserData = async () => {
    const userData = await API.get("/user/arthurmachado2016");
    this.setState({ userData: userData.data.data });
  };

  componentDidMount() {
    this.getUserData();
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <div className="center-grid">
            <img src={this.state.userData.profileImage} alt="Foto do usuário"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
