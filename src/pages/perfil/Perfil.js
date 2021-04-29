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

  componentDidMount() {
    this.getUserData();
    this.getTopTracks();
  }
  render() {
    const { userData, tracks } = this.state;
    const topTracks = {
      albumImages: [],
      tracksNames: [],
      albumsNames: [],
      artistsNames: [],
      trackSpotifyURL: [],
      albumSpotifyURL: [],
    };
    for (var i = 0; i < tracks.length; i++) {
      topTracks.albumImages.push(tracks[i]["album_image"]);
      topTracks.tracksNames.push(tracks[i]["track_name"]);
      topTracks.albumsNames.push(tracks[i]["album_name"]);
      topTracks.artistsNames.push(tracks[i]["artist_name"]);
      topTracks.trackSpotifyURL.push(tracks[i]["track_url"]);
      topTracks.albumSpotifyURL.push(tracks[i]["album_url"]);
      // console.log(tracks[i]["track"]["album"]);
    }
    console.log(tracks);

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
                <img
                  alt="Artist"
                  src="https://i.scdn.co/image/ab6761610000517464d74f5985cb66b2f7b60e93"
                />
                <div className="ranking-info">
                  <h4>The Strokes</h4>
                  <span>
                    Nota: <b>4.7</b>
                  </span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsStar size={32} />
                  <FaSpotify
                    size={28}
                    // onClick={() =>
                    //   window.open(topTracks.trackSpotifyURL[2], "_blank")
                    // }
                  />
                </div>
              </div>

              <div className="ranking-div">
                <h1>2</h1>
                <img
                  alt="Artist"
                  src="https://i.scdn.co/image/928aa3585beb2b6624792519d0e50f5220491f63"
                />
                <div className="ranking-info">
                  <h4>Los Hermanos</h4>
                  <span>
                    Nota: <b>4.7</b>
                  </span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsStar size={32} />
                  <FaSpotify size={28} />
                </div>
              </div>

              <div className="ranking-div">
                <h1>3</h1>
                <img
                  alt="Artist"
                  src="https://i.scdn.co/image/63d48514310a67c51a298d099edd0e6d9f9d61e9"
                />
                <div className="ranking-info">
                  <h4>O Terno</h4>
                  <span>
                    Nota: <b>4.7</b>
                  </span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsStar size={32} />
                  <FaSpotify size={28} />
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
