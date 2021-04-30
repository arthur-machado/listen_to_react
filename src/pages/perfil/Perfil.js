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

  getTopTracks = async () => {
    const topTracks = await API.get("/user-top-tracks", {
      headers: {
        access_token: Cookies.get("access_token"),
      },
    });
    this.setState({
      tracks: topTracks.data.top_tracks,
    });
  };

  getTopArtists = async () => {
    const topArtists = await API.get("/user-top-artists", {
      headers: {
        access_token: Cookies.get("access_token"),
      },
    });
    this.setState({
      artists: topArtists.data.top_artists,
    });
  };

  componentDidMount() {
    this.getUserData();
    this.getTopTracks();
    this.getTopArtists();
  }
  render() {
    const { userData, tracks, artists } = this.state;
    const topTracks = {
      albumImages: [],
      tracksNames: [],
      albumsNames: [],
      artistsNames: [],
      trackSpotifyURL: [],
      albumSpotifyURL: [],
    };
    for (let i = 0; i < tracks.length; i++) {
      topTracks.albumImages.push(tracks[i]["album_image"]);
      topTracks.tracksNames.push(tracks[i]["track_name"]);
      topTracks.albumsNames.push(tracks[i]["album_name"]);
      topTracks.artistsNames.push(tracks[i]["artist_name"]);
      topTracks.trackSpotifyURL.push(tracks[i]["track_url"]);
      topTracks.albumSpotifyURL.push(tracks[i]["album_url"]);
    }
    const topArtists = {
      artistsImages: [],
      artistsNames: [],
      artistsURL: [],
      notas: [],
    };
    for (let x = 0; x < artists.length; x++) {
      topArtists.artistsImages.push(artists[x]["artist_image"]);
      topArtists.artistsNames.push(artists[x]["artist_name"]);
      topArtists.artistsURL.push(artists[x]["artist_url"]);
      topArtists.notas.push(artists[x]["nota"]);
    }

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
              <div className="ranking-div">
                <h1>1</h1>
                <img alt="Track" src={topTracks.albumImages[0]} />
                <div className="ranking-info">
                  <h4>{topTracks.tracksNames[0]}</h4>
                  <span>{topTracks.artistsNames[0]}</span>
                  <span>{topTracks.albumsNames[0]}</span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsMusicNoteList size={28} />
                  <FaSpotify
                    size={28}
                    onClick={() =>
                      window.open(topTracks.trackSpotifyURL[0], "_blank")
                    }
                  />
                </div>
              </div>
              <div className="ranking-div">
                <h1>2</h1>
                <img alt="Track" src={topTracks.albumImages[1]} />
                <div className="ranking-info">
                  <h4>{topTracks.tracksNames[1]}</h4>
                  <span>{topTracks.artistsNames[1]}</span>
                  <span>{topTracks.albumsNames[1]}</span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsMusicNoteList size={28} />
                  <FaSpotify
                    size={28}
                    onClick={() =>
                      window.open(topTracks.trackSpotifyURL[1], "_blank")
                    }
                  />
                </div>
              </div>
              <div className="ranking-div">
                <h1>3</h1>
                <img alt="Track" src={topTracks.albumImages[2]} />
                <div className="ranking-info">
                  <h4>{topTracks.tracksNames[2]}</h4>
                  <span>{topTracks.artistsNames[2]}</span>
                  <span>{topTracks.albumsNames[2]}</span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsMusicNoteList size={28} />
                  <FaSpotify
                    size={28}
                    onClick={() =>
                      window.open(topTracks.trackSpotifyURL[2], "_blank")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="user-top">
              <h2>Top artistas do mês</h2>
              <div className="ranking-div">
                <h1>1</h1>
                <img alt="Artist" src={topArtists.artistsImages[0]} />
                <div className="ranking-info">
                  <h4>{topArtists.artistsNames[0]}</h4>
                  <span>
                    Nota: <b>{topArtists.notas[0]}</b>
                  </span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsStar size={32} />
                  <FaSpotify
                    size={28}
                    onClick={() =>
                      window.open(topArtists.artistsURL[0], "_blank")
                    }
                  />
                </div>
              </div>

              <div className="ranking-div">
                <h1>2</h1>
                <img alt="Artist" src={topArtists.artistsImages[1]} />
                <div className="ranking-info">
                  <h4>{topArtists.artistsNames[1]}</h4>
                  <span>
                    Nota: <b>{topArtists.notas[1]}</b>
                  </span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsStar size={32} />
                  <FaSpotify
                    size={28}
                    onClick={() =>
                      window.open(topArtists.artistsURL[1], "_blank")
                    }
                  />
                </div>
              </div>

              <div className="ranking-div">
                <h1>3</h1>
                <img alt="Artist" src={topArtists.artistsImages[2]} />
                <div className="ranking-info">
                  <h4>{topArtists.artistsNames[2]}</h4>
                  <span>
                    Nota: <b>{topArtists.notas[2]}</b>
                  </span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsStar size={32} />
                  <FaSpotify
                    size={28}
                    onClick={() =>
                      window.open(topArtists.artistsURL[2], "_blank")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
