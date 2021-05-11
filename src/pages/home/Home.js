import React, { Component } from "react";
import "./styles.css";
import { FiSun, FiSunset } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";

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
          <FiSunset size={32} />
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

export default Home;
