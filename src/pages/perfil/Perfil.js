import React, { Component } from "react";
import { API } from "../../utils/api";
import "./styles.css";
import { FaSpotify } from "react-icons/fa";
import { BsHeart, BsMusicNoteList, BsStar } from "react-icons/bs";
import BtnSeguir from "../../components/BtnSeguir/BtnSeguir";
import BtnMensagem from "../../components/BtnMensagem/BtnMensagem";

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = { userData: [] };
  }

  getUserData = async () => {
    const params = this.props.match.params;
    const userData = await API.get(`/user/${params.username}`);
    this.setState({ userData: userData.data.data });
  };

  componentDidMount() {
    this.getUserData();
  }
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="center-list">
            <div className="user-profile-info">
              <img
                src={this.state.userData.profileImage}
                alt="Foto do usuário"
                className="user-photo"
              />
              <div className="user-data">
                <h4>{this.state.userData.name}</h4>
                <div className="user-id">
                  <span>{this.state.userData.spotifyId}</span>
                  <FaSpotify
                    size={20}
                    onClick={() =>
                      window.open(
                        `https://open.spotify.com/user/${this.state.userData.spotifyId}`,
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
                    <b>15k</b> seguidores
                  </p>
                  <p>
                    <b>9</b> playlists
                  </p>
                  <p>
                    <b>15</b> reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="user-top">
              <h2>Top músicas do mês</h2>

              <div className="ranking-div">
                <h1>1</h1>
                <img
                  alt="Track"
                  src="https://i.scdn.co/image/ab67616d00001e02f07ef193e0bb6a238ea37f0a"
                />
                <div className="ranking-info">
                  <h4>Welcome to Japan</h4>
                  <span>The Strokes</span>
                  <span>Comedown Machine</span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsMusicNoteList size={28} />
                  <FaSpotify size={28} />
                </div>
              </div>
              <div className="ranking-div">
                <h1>2</h1>
                <img
                  alt="Track"
                  src="https://i.scdn.co/image/ab67616d00001e02f07ef193e0bb6a238ea37f0a"
                />
                <div className="ranking-info">
                  <h4>Partners in Crime</h4>
                  <span>The Strokes</span>
                  <span>Comedown Machine</span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsMusicNoteList size={28} />
                  <FaSpotify size={28} />
                </div>
              </div>
              <div className="ranking-div">
                <h1>3</h1>
                <img
                  alt="Track"
                  src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                />
                <div className="ranking-info">
                  <h4>Save Your Tears</h4>
                  <span>The Weekend</span>
                  <span>After Hours</span>
                </div>
                <div className="ranking-actions">
                  <BsHeart size={28} />
                  <BsMusicNoteList size={28} />
                  <FaSpotify size={28} />
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
                  <BsStar size={28} />
                  <FaSpotify size={28} />
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
                  <BsStar size={28} />
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
                  <BsStar size={28} />
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
