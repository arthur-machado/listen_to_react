import React, { Component } from "react";
import "./styles.css";
import { FiSun } from "react-icons/fi";
import { BsMoon, BsStarFill, BsStar } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";

class Home extends Component {
  // Função que pega a hora atual e personaliza a mensagem
  getPeriodOfTheDay() {
    var today = new Date();
    var currentHour = today.getHours();

    if (currentHour < 12) {
      return (
        <div className="welcome">
          <h2>Bom dia, Arthur</h2>
          <FiSun size={32} />
        </div>
      );
    } else if (currentHour < 18) {
      return (
        <div className="welcome">
          <h2>Boa tarde, Arthur</h2>
          <FiSun size={32} />
        </div>
      );
    } else {
      return (
        <div className="welcome">
          <h2>Boa noite, Arthur</h2>
          <BsMoon size={32} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="left-side-content">
            {this.getPeriodOfTheDay()}

            <div className="trending">
              <div className="section-title">
                <h3>Novidades</h3>
                <span>VER MAIS</span>
              </div>
              <div className="releases">
                {/* Divs das novidades */}
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e0239eacaff515486b4b531d2f4"
                    alt="Álbum"
                  />
                  <h4>i n t e r l u d e</h4>
                  <span>J. Cole</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e02f6a6f6a1485a9b163dedc618"
                    alt="Álbum"
                  />
                  <h4>Better Mistakes</h4>
                  <span>Bebe Rexha</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e023f2c7bc651e1220df6562416"
                    alt="Álbum"
                  />
                  <h4>What You Need</h4>
                  <span>Don Toliver</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e028c5b92bccc0b782670a90800"
                    alt="Álbum"
                  />
                  <h4>Tiempo</h4>
                  <span>Ozuna</span>
                </div>
              </div>
            </div>

            <div className="week-ranking">
              <div className="section-title">
                <h3>Ranking da Semana</h3>
                <span>VER MAIS</span>
              </div>
              <div className="ranking-list">
                <div className="ranking-item">
                  <h1>1</h1>
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e02926f43e7cce571e62720fd46"
                    alt="Álbum"
                  />
                  <div className="ranking-info">
                    <h4>Unorthodox Jukebox</h4>
                    <span>Bruno Mars</span>
                    <div className="score">
                      <BsStarFill size={18} />
                      <label>9.1</label>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} />
                  </div>
                </div>

                <div className="ranking-item">
                  <h1>2</h1>
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e02c32340c5ed875c13a0a7173a"
                    alt="Álbum"
                  />
                  <div className="ranking-info">
                    <h4>{"<atrás/além>"}</h4>
                    <span>O Terno</span>
                    <div className="score">
                      <BsStarFill size={18} />
                      <label>9.1</label>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} />
                  </div>
                </div>

                <div className="ranking-item">
                  <h1>3</h1>
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e027fcead687e99583072cc217b"
                    alt="Álbum"
                  />
                  <div className="ranking-info">
                    <h4>Beauty Behind The Madness</h4>
                    <span>The Weekend</span>
                    <div className="score">
                      <BsStarFill size={18} />
                      <label>9.1</label>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} />
                  </div>
                </div>
              </div>
            </div>

            <div className="blog">
              <div className="section-title">
                <h3>Blog</h3>
                <span>VER MAIS</span>
              </div>
              <div className="blog-post">
                <div className="post-text">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <span>
                    por <b>Arthur Machado</b>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in interdum nulla.{" "}
                  </p>
                </div>
                <img
                  src="https://i.scdn.co/image/17c114f4f67d3a4aa9c4cfe284f3d16eb4e4345c"
                  alt="Foto do Artista"
                />
              </div>
              <div className="blog-post">
                <div className="post-text">
                  <h3>10 motivos para você ouvir Olivia Rodrigo hoje</h3>
                  <span>
                    por <b>Arthur Machado</b>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <img
                  src="https://i.scdn.co/image/87a226fd8b3b7b03ead89c116b91c6b09cc3feff"
                  alt="Foto do Artista"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
