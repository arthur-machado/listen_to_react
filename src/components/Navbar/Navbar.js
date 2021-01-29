import React, { Component } from "react";
import "./navbar.css";
import {
  BsFillBarChartFill,
  BsMusicNoteList,
  BsChatSquareFill,
  BsGearFill,
  BsFillPersonFill,
  BsList,
} from "react-icons/bs";
import WrapperMenu from "./WrapperMenu";

class Navbar extends Component {
  state = {
    wrapperIsOpen: false,
  };

  toggle = () => {
    this.setState({ wrapperIsOpen: !this.state.wrapperIsOpen });
  };

  render() {
    return (
      // essa propriedade é passada para modificar a navbar
      // caso seja a página inicial
      this.props.isIndexPage === true ? (
        <nav id="nav-index">
          <div id="nav-body-index">
            <a className="nav-title" href="/">
              Listen.to
            </a>
          </div>
        </nav>
      ) : (
        <nav id="nav">
          <div id="nav-body">
            <a className="nav-title" href="/">
              Listen.to
            </a>
            <ul>
              <li>
                <BsFillBarChartFill size={20} />
              </li>
              <li>
                <BsMusicNoteList size={20} />
              </li>
              <li>
                <BsChatSquareFill size={20} />
              </li>
              <li>
                <BsGearFill size={20} />
              </li>
              <li>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Buscar artistas, músicas, usuários..."
                ></input>
              </li>
              <li className="user-icon">
                <BsFillPersonFill size={25} />
              </li>
            </ul>
            <div className="wrapper-menu">
              <BsList size={30} onClick={this.toggle} />
            </div>
          </div>
          <WrapperMenu visible={this.state.wrapperIsOpen} />
        </nav>
      )
    );
  }
}

export default Navbar;
