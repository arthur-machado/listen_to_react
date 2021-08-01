import React, { useState } from 'react';
import { useUser } from '../../hooks/UserContext';

import ReactTooltip from 'react-tooltip';

import {
  NavIndex,
  NavBodyIndex,
  Nav,
  NavBody,
  RankingIcon,
  FeedIcon,
  ChatIcon,
  SettingsIcon,
  UserIcon,
  WrapperIcon,
} from './navbar_styles';
import WrapperMenu from './WrapperMenu';

const Navbar = (props) => {
  const [wrapperIsOpen, setWrapper] = useState(false);
  const userData = useUser();

  const toogle = () => {
    setWrapper(!wrapperIsOpen);
  };

  return (
    <>
      {props.isIndexPage ? (
        <NavIndex>
          <NavBodyIndex>
            <a className="nav-title" href="/home">
              Listen.to
            </a>
          </NavBodyIndex>
        </NavIndex>
      ) : (
        <Nav>
          <NavBody>
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
                  <RankingIcon />
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
                  <FeedIcon />
                </a>
                <ReactTooltip id="feed-tip" place="bottom" effect="solid">
                  <span>Feed</span>
                </ReactTooltip>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="/#"
                  data-tip
                  data-for="chat-tip"
                >
                  <ChatIcon />
                </a>
                <ReactTooltip id="chat-tip" place="bottom" effect="solid">
                  <span>Mensagens</span>
                </ReactTooltip>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="/#"
                  data-tip
                  data-for="settings-tip"
                >
                  <SettingsIcon />
                </a>
                <ReactTooltip id="settings-tip" place="bottom" effect="solid">
                  <span>Ajustes</span>
                </ReactTooltip>
              </li>
              <li>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Buscar artistas, músicas, usuários..."
                />
              </li>
              <li className="user-icon">
                <UserIcon />
              </li>
              <li
                style={{
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  marginLeft: '-60px',
                }}
              >
                {' '}
                {userData && (
                  <a
                    className="navbar-link"
                    href={`/user/${userData.username}`}
                  >
                    {userData.userDisplayName}
                  </a>
                )}
              </li>
            </ul>
            <div className="wrapper-menu">
              <WrapperIcon size={30} onClick={() => toogle()} />
            </div>
          </NavBody>
          <WrapperMenu visible={wrapperIsOpen} />
        </Nav>
      )}
    </>
  );
};

export default Navbar;
