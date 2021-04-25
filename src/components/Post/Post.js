import React, { Component } from "react";
import {
  BsMusicNoteList,
  BsHeart,
  BsHeartFill,
  BsEnvelope,
  BsTextLeft,
  BsStar,
} from "react-icons/bs";
import "./post.css";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    liked: false,
  };

  toggleLike = (e) => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <div className="card">
        <div className="user-info">
          <img id="user-photo" alt="Foto do usuário" src={this.props.image} />
          <Link to={`/user/${this.props.username}`}>
            <span id="username" style={{ whiteSpace: "nowrap" }}>
              {this.props.userDisplayName}
            </span>
          </Link>
          <span id="timestamp">Está ouvindo:</span>
        </div>
        <div className="side-buttons">
          <ul>
            <BsMusicNoteList size={30} />
            {this.state.liked ? (
              <BsHeartFill
                size={30}
                onClick={this.toggleLike}
                color="#bd1515"
              />
            ) : (
              <BsHeart size={30} onClick={this.toggleLike} />
            )}
            <BsEnvelope size={30} />
            <BsTextLeft size={30} />
            <BsStar size={30} />
          </ul>
        </div>
        <iframe
          title="post"
          src={`https://open.spotify.com/embed/track/${this.props.music}`}
          allowtransparency="true"
          allow="encrypted-media"
          width="240"
          height="320"
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
}

export default Post;
