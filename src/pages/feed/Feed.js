import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import "./styles.css";
import Cookies from 'js-cookie';

class Feed extends Component {
  state = {
    serverData: {
      user: {
        displayName: "",
        id: "",
        image: null,
        email: null,
      },
    },
    music: {
      recent: null,
    },
  };

  getUserData = () => {
    // Acessa o token do Spotify salvo nos cookies
    let access_token = Cookies.get('access_token')
    let data = {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    };

    fetch("https://api.spotify.com/v1/me", data)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          serverData: {
            user: {
              displayName: data.display_name,
              image: data.images[0]["url"],
              email: data.email
            },
          },
        })
      );
  };

  getCurrentPlay = () => {
    let access_token = Cookies.get('access_token')
    let data = {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    };

    fetch("https://api.spotify.com/v1/me/player/currently-playing", data)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          music: { recent: data.item.id },
        })
      );
  };

  componentDidMount() {
    this.getUserData();
    this.getCurrentPlay();
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <Navbar userDisplayName={this.state.serverData.user.displayName} />
        </div>
        <div className="content">
          
            <div className="posts-list">
              <Post
                image={this.state.serverData.user.image}
                userDisplayName={this.state.serverData.user.displayName}
                music={this.state.music.recent}
              />
            </div>
          
        </div>
      </div>
    );
  }
}

export default Feed;
