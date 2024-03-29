import React, { Component } from "react";
import Post from "../../components/Post/Post";
import "./styles.css";
import Cookies from "js-cookie";
import { createDocumentTitle } from "../../utils/utils";
class Feed extends Component {
  state = {
    serverData: {
      user: {
        displayName: "",
        id: "",
        image: null,
        email: null,
        spotifyID: "",
      },
    },
    music: {
      recent: null,
    },
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
          serverData: {
            user: {
              displayName: data.display_name,
              image: data.images[0]["url"],
              email: data.email,
              username: data.id,
            },
          },
        })
      );
  };

  getCurrentPlay = () => {
    let access_token = Cookies.get("access_token");
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
    createDocumentTitle('Feed');
    this.getUserData();
    this.getCurrentPlay();
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="posts-list">
            <Post
              image={this.state.serverData.user.image}
              userDisplayName={this.state.serverData.user.displayName}
              music={this.state.music.recent}
              username={this.state.serverData.user.username}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
