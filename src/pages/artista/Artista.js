import React, { Component } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { GrLike, GrDislike } from "react-icons/gr";
import "./styles.css";
import { API } from "../../utils/api";
import Cookies from "js-cookie";

class Artista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistData: [],
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

  renderAlbums(albums) {
    const listOfDiv = [];
    for (var i = 0; i < albums.length; i++) {
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

  componentDidMount() {
    this.getArtistData();
  }

  render() {
    const { artistData } = this.state;
    var albums = artistData["albums"];
    var topTracks = artistData["top_tracks"];

    return (
      <div className="container">
        <div className="content">
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
                    <form>
                      <div className="add-comment">
                        <img
                          src="https://avatars.githubusercontent.com/u/50958424?v=4"
                          alt="Foto de Usuário"
                        />

                        <input
                          type="text"
                          className="comment-box"
                          required
                          placeholder="Adicionar um comentário"
                          maxLength={90}
                        />
                        <button type="submit" className="rate-btn">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="comment">
                    <img
                      src="https://avatars.githubusercontent.com/u/50958424?v=4"
                      alt="Foto de Usuário"
                    />
                    <div className="name-comment">
                      <span>Arthur Machado</span>
                      <p>
                        Labore pariatur est eiusmod minim mollit labore tempor
                        fugiat nulla exercitation Lorem.
                      </p>
                      <div className="comment-likes">
                        <div className="like-actions">
                          <GrLike size="16" />
                          {"115"}
                        </div>
                        <div className="like-actions">
                          <GrDislike size="16" />
                          {"115"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment">
                    <img
                      src="https://avatars.githubusercontent.com/u/50958424?v=4"
                      alt="Foto de Usuário"
                    />
                    <div className="name-comment">
                      <span>Arthur Machado</span>
                      <p>
                        Labore pariatur est eiusmod minim mollit labore tempor
                        fugiat nulla exercitation Lorem.
                      </p>
                      <div className="comment-likes">
                        <div className="like-actions">
                          <GrLike size="16" />
                          {"115"}
                        </div>
                        <div className="like-actions">
                          <GrDislike size="16" />
                          {"115"}
                        </div>
                      </div>
                    </div>
                  </div>
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
