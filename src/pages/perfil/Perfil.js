import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { API } from "../../utils/api";
import { Col, Row, Container } from "reactstrap";
import "./styles.css";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = { userData: [] };
  }

  getUserData = async () => {
    const params = this.props.match.params;
    const userData = await API.get(`/user/${params.username}`);
    this.setState({ userData: userData.data.data });
  };

  componentDidMount() {
    this.getUserData();
  }
  render() {
    return (
      <div className="container">
        {/* <div className="navbar">
          <Navbar />
        </div> */}
        <div className="content">
          <Container>
            <Row className="justify-content-center">
              <img
                src={this.state.userData.profileImage}
                alt="Foto do usuário"
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Perfil;
