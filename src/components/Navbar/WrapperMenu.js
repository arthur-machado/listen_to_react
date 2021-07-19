import React, { Component } from 'react';
import {
  BsFillBarChartFill,
  BsMusicNoteList,
  BsChatSquareFill,
  BsGearFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { CgFeed } from 'react-icons/cg';
import Cookies from 'js-cookie';
import './wrapper.css';

class WrapperMenu extends Component {
  render() {
    return (
      <div
        className="wrapper-div"
        style={{ display: this.props.visible ? 'block' : 'none' }}
      >
        <div>
          <ul className="wrapper-list">
            <a href="/home" className="navbar-link">
              <li className="list-item">
                <BsFillBarChartFill size={20} /> Home
              </li>
            </a>
            <a href="/feed" className="navbar-link">
              <li className="list-item">
                <CgFeed size={20} /> Feed
              </li>
            </a>
            <li className="list-item">
              <BsMusicNoteList size={20} /> Playlists
            </li>
            <li className="list-item">
              <BsChatSquareFill size={20} /> Chat
            </li>
            <a href={`/user/${Cookies.get('user')}`} className="navbar-link">
              <li className="list-item">
                <BsFillPersonFill size={20} /> Perfil
              </li>
            </a>
            <li className="list-item">
              <BsGearFill size={20} /> Ajustes
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default WrapperMenu;
