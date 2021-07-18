import React, { Component } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { GrLike, GrDislike } from "react-icons/gr";
import "./styles.css";
import { API } from "../../utils/api";
import Cookies from "js-cookie";
import Modal from "../../components/Modal/index";

class Artista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistData: [],
      username: "",
      user_image: "",
      comment: "",
      showModal: false,
    };
  }

  getArtistData = async () => {
    const params = this.props.match.params;
    const artistData = await API.get(`/artist/${params.id}`, {
      headers: {
        access_token: Cookies.get("access_token"),
      },
    });
    this.setState({
      artistData: artistData.data.artist,
    });
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
          user_image: data.images[0].url,
        })
      );
  };

  handleChange(event) {
    let { value } = event.target;
    this.setState({ comment: value });
  }

  showModal = (e) => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  createNewComment = async () => {
    const { comment, username, userDisplayName, user_image } = this.state;
    const params = this.props.match.params;
    const json_obj = {
      username: username,
      user_display_name: userDisplayName,
      user_display_image: user_image,
      content: comment,
    };
    try {
      await API.post(`/artist/${params.id}/comment`, json_obj);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  renderAlbums(albums) {
    const listOfDiv = [];
    for (var i = 0; i <= 3; i++) {
      listOfDiv.push(
        <div className="release-div" key={i + 1}>
          <img src={albums[i].images[1].url} alt="Álbum" />
          <h4>{albums[i].name}</h4>
          <span>{albums[i].artists[0].name}</span>
        </div>
      );
    }

    return listOfDiv;
  }

  renderTopTracks(tracks) {
    const listOfDiv = [];
    for (var i = 0; i < tracks.length; i++) {
      listOfDiv.push(
        <div className="ranking-item" key={i + 1}>
          <div>
            <h1>{i + 1}</h1>
            <img src={tracks[i].album_image} alt="Álbum" />
            <div className="ranking-info">
              <h4>{tracks[i].track_name}</h4>
              <span>{tracks[i].artist_name}</span>
              <div className="score">
                <BsStarFill size={18} />
                <label>{tracks[i].score}</label>
              </div>
            </div>
          </div>
          <div className="ranking-actions">
            <BsStar size={28} />
            <FaSpotify size={28} className="spotify-url" />
          </div>
        </div>
      );
    }

    return listOfDiv;
  }

  renderComments(comments) {
    const listOfDiv = [];
    comments = comments.reverse();
    for (var i = 0; i < comments.length; i++) {
      listOfDiv.push(
        <div className="comment">
          <img src={comments[i].userProfileImage} alt="Foto de Usuário" />
          <div className="name-comment">
            <span>{comments[i].userDisplayName}</span>
            <p>{comments[i].content}</p>
            <div className="comment-likes">
              <div className="like-actions">
                <GrLike size="16" />
                {comments[i].likes}
              </div>
              <div className="like-actions">
                <GrDislike size="16" />
                {comments[i].dislikes}
              </div>
              {(this.state.username === comments[i].username) &&
              (
                <label
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  Excluir
                </label>
              )}
            </div>
          </div>
        </div>
      );
    }

    return listOfDiv;
  }

  componentDidMount() {
    this.getArtistData();
    this.getUserData();
  }

  render() {
    const { artistData } = this.state;
    var albums = artistData["albums"];
    var topTracks = artistData["top_tracks"];
    const blurContent = {
      filter: "blur(8px)",
    };
    return (
      <div className="container">
        <Modal
          onClose={this.showModal}
          show={this.state.showModal}
          modalTitle={"Excluir Comentário"}
          type="delete"
        >
          Tem certeza de que deseja excluir o comentário?
        </Modal>
        <div
          className="content"
          style={this.state.showModal ? blurContent : null}
        >
          <div className="center-div">
            <div
              className="artist-header"
              style={{
                backgroundImage: `url(${artistData.profileImage})`,
              }}
            >
              <div className="artist-tags">
                <div className="artist-info">
                  <button id="artist-numbers">
                    <div className="numbers">
                      <p>
                        <b>{artistData.numFans}</b> fãs
                      </p>
                      <p>
                        <b>{artistData.rankPosition}</b> ranking
                      </p>
                      <p>
                        <b>{artistData.numReviews}</b> reviews
                      </p>
                    </div>
                  </button>
                  <button id="artist-name">{artistData.name}</button>
                  <button id="artist-tag">ARTISTA</button>
                </div>
              </div>
              <div className="artist-score">
                <button id="avg">MÉDIA</button>
                <button id="score">{artistData.meanReviews}</button>
              </div>
            </div>

            <div className="user-actions">
              <button className="rate-btn">Classificar</button>
              <button className="fan-btn">Virar Fã</button>
              <button
                className="sp-artist"
                onClick={() =>
                  window.open(`${artistData.hrefSpProfile}`, "_blank")
                }
              >
                Spotify
              </button>
            </div>

            <div className="top-artist-tracks">
              <div className="section-title">
                <h3>Top Músicas</h3>
                <span>VER MAIS</span>
              </div>
              <div className="ranking-list">
                {topTracks ? this.renderTopTracks(topTracks) : ""}
              </div>
            </div>

            <div className="discography">
              <div className="section-title">
                <h3>Discografia</h3>
                <span>VER TUDO</span>
              </div>
              <div className="releases">
                {albums ? this.renderAlbums(albums) : ""}
              </div>
              <div className="comments">
                <div className="section-title">
                  <h3>Comentários</h3>
                  <span>VER TUDO</span>
                </div>
                <div className="comments-list">
                  <div className="comment-div">
                    <div className="add-comment">
                      <img src={this.state.user_image} alt="Foto de Usuário" />

                      <input
                        type="text"
                        className="comment-box"
                        required
                        placeholder="Adicionar um comentário"
                        maxLength={90}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <button
                        type="submit"
                        className="rate-btn"
                        onClick={() => this.createNewComment()}
                        disabled={this.state.comment === ""}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                  {/* {comments ? this.renderComments(comments) : ""} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Artista;
