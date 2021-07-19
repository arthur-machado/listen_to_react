import React, { Component } from 'react';
import {
  BsFillBarChartFill,
  BsMusicNoteList,
  BsChatSquareFill,
  BsGearFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { CgFeed } from 'react-icons/cg';
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
            <li className="list-item">
              <BsFillBarChartFill size={20} /> Ranking
            </li>
            <li className="list-item">
              <CgFeed size={20} /> Feed
            </li>
            <li className="list-item">
              <BsMusicNoteList size={20} /> Playlists
            </li>
            <li className="list-item">
              <BsChatSquareFill size={20} /> Chat
            </li>
            <li className="list-item">
              <BsFillPersonFill size={20} /> Perfil
            </li>
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
