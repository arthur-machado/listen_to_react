import styled from "styled-components";
import {
  BsFillBarChartFill,
  BsChatSquareFill,
  BsGearFill,
  BsFillPersonFill,
  BsList,
} from "react-icons/bs";
import { CgFeed } from "react-icons/cg";

export const NavIndex = styled.nav`
  background-color: #fafafa;
  width: 100vw;
  position: fixed;
  top: 0;
  height: 3.7rem;
  box-shadow: 0px 2px 10px #00000066;
  z-index: 1;
`;

export const NavBodyIndex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 8px;

  .nav-title {
    font-family: "Allerta Stencil", sans-serif;
    font-size: 33px;
    font-weight: 300;
    color: #000000;
    transition: 0.3s;

    &:hover {
      color: #777777;
    }
  }
`;

export const Nav = styled.nav`
  background-color: #fafafa;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.7rem;
  box-shadow: 0px 2px 10px #00000066;
  z-index: 1;
`;

export const NavBody = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  padding: 7px 7rem 8px;
  justify-content: center;

  .wrapper-menu {
    display: none;
  }

  .navbar-link {
    color: #000000;
    transition: 0.4s;
    width: 20px;
    height: 20px;

    &:hover {
      color: #777777;
    }
  }

  .nav-title {
    font-family: "Allerta Stencil", sans-serif;
    font-size: 33px;
    font-weight: 300;
    color: #000000;
    transition: 0.3s;

    /* margin-right: 870px; */
    margin-right: 78rem;

    &:hover {
      color: #585858;
    }
  }

  .input-text {
    width: 295px;
    position: absolute;
    height: 1.6rem;
    top: -10px;
    border-radius: 24px;
    padding: 3px 20px;
    border: 3px solid #585858;
    background-color: #585858;
    color: #ffffff;
    font-size: 15px;
    transition: 0.3s;

    &:focus {
      outline: none;
      border: 3px solid #dadada;
    }

    ::placeholder {
      color: #dadada;
      font-weight: lighter;
    }
  }
  .user-icon {
    position: relative;
    margin-left: 19rem;
    /* margin-left: 50%; */
    bottom: 4px;
  }
  > ul {
    display: flex;
    flex-direction: row;
    position: absolute;
    margin: 0px 12.6rem 20rem;
    top: 22px;
  }

  > ul li {
    list-style-type: none;
    padding: 0px 2.5rem;
    transition: 0.5s;

    &:hover {
      color: #777777;
      cursor: pointer;
    }
  }
  @media (max-width: 1070px) {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    padding: 7px 24px 8px;

    > ul {
      display: none;
    }

    .nav-title {
      margin-right: 47px;
    }
    .wrapper-menu {
      display: flex;
      position: absolute;
      top: 17px;
      left: 25px;
      cursor: pointer;
    }
  }
`;
export const RankingIcon = styled(BsFillBarChartFill)``;
export const FeedIcon = styled(CgFeed)``;
export const ChatIcon = styled(BsChatSquareFill)``;
export const SettingsIcon = styled(BsGearFill)``;
export const UserIcon = styled(BsFillPersonFill)`
  width: 23px;
  height: 23px;
`;
export const WrapperIcon = styled(BsList)``;
