import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import "./styles.css";

class Feed extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <div className="posts-list">
            <Post music="1Q3t9fWvHUXKsMmpD2XpUu" />
            <Post music="6l7EWyRzo2mkMkxDKI8NZ7" />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
