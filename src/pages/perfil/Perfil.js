import React, { Component } from "react";
import { API } from "../../utils/api";
import "./styles.css";
import { FaSpotify } from "react-icons/fa";
import { BsHeart, BsMusicNoteList, BsStar } from "react-icons/bs";
import BtnSeguir from "../../components/BtnSeguir/BtnSeguir";
import BtnMensagem from "../../components/BtnMensagem/BtnMensagem";
import Cookies from "js-cookie";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      tracks: [],
      artists: [],
    };
  }

  getUserData = async () => {
    const params = this.props.match.params;
    const userData = await API.get(`/user-profile/${params.username}`, {
      headers: {
        access_token: Cookies.get("access_token"),
      },
    });
    this.setState({
      userData: userData.data.user,
    });
  };

  renderTopTracks(topTracks) {
    const listOfDiv = [];
    for (var i = 0; i < topTracks.length; i++) {
      listOfDiv.push(
        <div className="ranking-div" key={i + 1}>
          <h1>{i + 1}</h1>
          <img alt="Track" src={topTracks[i].album_image} />
          <div className="ranking-info">
            <h4>{topTracks[i].track_name}</h4>
            <span>{topTracks[i].artist_name}</span>
            <span>{topTracks[i].album_name}</span>
          </div>
          <div className="ranking-actions">
            <BsHeart size={28} />
            <BsMusicNoteList size={28} />
            <FaSpotify
              size={28}
              // eslint-disable-next-line no-loop-func
              onClick={() => window.open(topTracks[i].track_url, "_blank")}
            />
          </div>
        </div>
      );
    }

    return listOfDiv;
  }

  renderTopArtists(topArtists) {
    const listOfDiv = [];
    for (var i = 0; i < topArtists.length; i++) {
      listOfDiv.push(
        <div className="ranking-div" key={i + 1}>
          <h1>{i + 1}</h1>
          <img alt="Artist" src={topArtists[i].artist_image} />
          <div className="ranking-info">
            <h4>{topArtists[i].artist_name}</h4>
            <span>
              Nota: <b>{topArtists[i].nota}</b>
            </span>
          </div>
          <div className="ranking-actions">
            <BsHeart size={28} />
            <BsStar size={32} />
            <FaSpotify
              size={28}
              // eslint-disable-next-line no-loop-func
              onClick={() =>
                window.open(topArtists[i].artist_url, "_blank")
              }
            />
          </div>
        </div>
      );
    }

    return listOfDiv;
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const { userData } = this.state;
    var topArtists = userData["top_artists"];
    var topTracks = userData["top_tracks"];

    console.log(topArtists);

    return (
      <div className="container">
        <div className="content">
          <div className="center-list">
            <div className="user-profile-info">
              <img
                src={userData.profileImage}
                alt="Foto do usuário"
                className="user-photo"
              />
              <div className="user-data">
                <h4>{userData.name}</h4>
                <div className="user-id">
                  <span>{userData.spotifyId}</span>
                  <FaSpotify
                    size={20}
                    onClick={() =>
                      window.open(
                        `https://open.spotify.com/user/${userData.spotifyId}`,
                        "_blank"
                      )
                    }
                  />
                </div>
                <div className="user-actions">
                  <BtnSeguir />
                  <BtnMensagem />
                </div>
                <div className="user-numbers">
                  <p>
                    <b>{userData.followers}</b> seguidores
                  </p>
                  <p>
                    <b>{userData.totalPlaylists}</b> playlists
                  </p>
                  <p>
                    <b>{userData.reviews}</b> reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="user-top">
              <h2>Top músicas do mês</h2>

              {topTracks ? (
                this.renderTopTracks(topTracks)
              ) : (
                <div className="ranking-div">
                  {/* Implementar depois uma page de loading para essas situações */}
                  <span>Carregando...</span> 
                </div>
              )}
            </div>
            <div className="user-top">
              <h2>Top artistas do mês</h2>
              {topArtists ? (
                this.renderTopArtists(topArtists)
              ) : (
                <div className="ranking-div">
                  <span>Carregando...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
