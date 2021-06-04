import React, { Component } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import "./styles.css";

class Artista extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="center-div">
            <div
              className="artist-header"
              style={{
                backgroundImage: `url("https://i.scdn.co/image/37376dba0623c33923eae9d234e5e199b76d227f")`,
              }}
            >
              <div className="artist-tags">
                <div className="artist-info">
                  <button id="artist-numbers">
                    <div className="numbers">
                      <p>
                        <b>15M</b> fãs
                      </p>
                      <p>
                        <b>24°</b> ranking
                      </p>
                      <p>
                        <b>201.245</b> reviews
                      </p>
                    </div>
                  </button>
                  <button id="artist-name">The Weeknd</button>
                  <button id="artist-tag">ARTISTA</button>
                </div>
              </div>
              <div className="artist-score">
                <button id="avg">MÉDIA</button>
                <button id="score">9.1</button>
              </div>
            </div>
            <div className="user-actions">
              <button className="rate-btn">Classificar</button>
              <button className="fan-btn">Virar Fã</button>
              <button className="sp-artist">Spotify</button>
            </div>

            <div className="top-artist-tracks">
              <div className="section-title">
                <h3>Top Músicas</h3>
                <span>VER MAIS</span>
              </div>
              <div className="ranking-list">
                <div className="ranking-item">
                  <div>
                    <h1>1</h1>
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e02764ac25ee0d41190d513475a"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Save Your Tears (with Ariana Grande) (Remix)</h4>
                      <span>The Weeknd, Ariana Grande</span>
                      <div className="score">
                        <BsStarFill size={18} />
                        <label>9.1</label>
                      </div>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>

                <div className="ranking-item">
                  <div>
                    <h1>2</h1>
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Blinding Lights</h4>
                      <span>The Weeknd</span>
                      <div className="score">
                        <BsStarFill size={18} />
                        <label>9.1</label>
                      </div>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>

                <div className="ranking-item">
                  <div>
                    <h1>3</h1>
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Save Your Tears</h4>
                      <span>The Weeknd</span>
                      <div className="score">
                        <BsStarFill size={18} />
                        <label>9.1</label>
                      </div>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>
              </div>
            </div>

            <div className="artist-top-albuns">
              <div className="section-title">
                <h3>Top Álbuns</h3>
                <span>VER MAIS</span>
              </div>
              <div className="ranking-list">
                <div className="ranking-item">
                  <div>
                    <h1>1</h1>
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e0281a3bb9348718b9703364c1c"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>After Hours</h4>
                      <span>The Weeknd</span>
                      <div className="score">
                        <BsStarFill size={18} />
                        <label>9.1</label>
                      </div>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>

                <div className="ranking-item">
                  <div>
                    <h1>2</h1>
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Starboy</h4>
                      <span>The Weeknd</span>
                      <div className="score">
                        <BsStarFill size={18} />
                        <label>9.1</label>
                      </div>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>

                <div className="ranking-item">
                  <div>
                    <h1>3</h1>
                    <img
                      src="https://i.scdn.co/image/ab67616d00001e02bdb8178fbb193a382939fd93"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Beauty Behind The Madness</h4>
                      <span>The Weeknd</span>
                      <div className="score">
                        <BsStarFill size={18} />
                        <label>9.1</label>
                      </div>
                    </div>
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>
              </div>
            </div>

            <div className="discography">
              <div className="section-title">
                <h3>Discografia</h3>
                <span>VER TUDO</span>
              </div>
              <div className="releases">
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e02274b406a7e18acebcf743079"
                    alt="Álbum"
                  />
                  <h4>House Of Balloons (Original)</h4>
                  <span>The Weeknd</span>
                  <span>2021</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e0212a76d1b13ef07188f7dfbc9"
                    alt="Álbum"
                  />
                  <h4>The Highlights</h4>
                  <span>The Weeknd</span>
                  <span>2021</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e0280880b62143e819e901d8465"
                    alt="Álbum"
                  />
                  <h4>After Hours (Deluxe)</h4>
                  <span>The Weeknd</span>
                  <span>2020</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                    alt="Álbum"
                  />
                  <h4>After Hours</h4>
                  <span>The Weeknd</span>
                  <span>2020</span>
                </div>
                <div className="release-div">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                    alt="Álbum"
                  />
                  <h4>After Hours</h4>
                  <span>The Weeknd</span>
                  <span>2020</span>
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
