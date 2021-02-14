import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import "./styles.css";
import queryString from "query-string";

class Feed extends Component {
  state = {
    serverData: {
      user: {
        displayName: "",
        id: "",
        image: null,
      },
    },
    music: {
      recent: null,
    },
  };

  getUserData = () => {
    let parse = queryString.parse(window.location.search);
    let access_token = parse.access_token;

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
            },
          },
        })
      );
  };

  getCurrentPlay = () => {
    let parse = queryString.parse(window.location.search);
    let access_token = parse.access_token;

    let data = {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    };

    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", data)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          music: { recent: data.items[0].track.id } ,
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
            <Post
              image={this.state.serverData.user.image}
              userDisplayName={this.state.serverData.user.displayName}
              music="6l7EWyRzo2mkMkxDKI8NZ7"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
