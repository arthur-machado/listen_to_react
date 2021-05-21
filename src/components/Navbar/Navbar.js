import React, { Component } from "react";
import "./navbar.css";
import {
  BsFillBarChartFill,
  BsChatSquareFill,
  BsGearFill,
  BsFillPersonFill,
  BsList,
} from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import ReactTooltip from "react-tooltip";
import WrapperMenu from "./WrapperMenu";
import Cookies from "js-cookie";
class Navbar extends Component {
  state = {
    wrapperIsOpen: false,
    userDisplayName: "",
    username: "",
  };

  toggle = () => {
    this.setState({ wrapperIsOpen: !this.state.wrapperIsOpen });
  };

  getUserData = () => {
    // Acessa o token do Spotify salvo nos cookies
    let access_token = Cookies.get("access_token");
    let data = {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    };

    fetch("https://api.spotify.com/v1/me", data)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          userDisplayName: data.display_name,
          username: data.id,
        })
      );
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      // essa propriedade é passada para modificar a navbar
      // caso seja a página inicial
      this.props.isIndexPage === true ? (
        <nav id="nav-index">
          <div id="nav-body-index">
            <a className="nav-title" href="/home">
              Listen.to
            </a>
          </div>
        </nav>
      ) : (
        <nav id="nav">
          <div id="nav-body">
            <a className="nav-title" href="/home">
              Listen.to
            </a>
            <ul>
              <li>
                <a
                  className="navbar-link"
                  href="/home"
                  data-tip
                  data-for="ranking-tip"
                >
                  <BsFillBarChartFill size={20} />
                </a>
                <ReactTooltip id="ranking-tip" place="bottom" effect="solid">
                  <span>Rankings</span>
                </ReactTooltip>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="/feed"
                  data-tip
                  data-for="feed-tip"
                >
                  <CgFeed size={20} />
                </a>
                <ReactTooltip id="feed-tip" place="bottom" effect="solid">
                  <span>Feed</span>
                </ReactTooltip>
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
              <li
                style={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  marginLeft: "-60px",
                }}
              >
                <b>
                  <a
                    className="navbar-link"
                    href={`/user/${this.state.username}`}
                  >
                    {this.state.userDisplayName}
                  </a>
                </b>
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
