import React, { useState, useEffect } from 'react';
import './styles.css';
import { FiSun } from 'react-icons/fi';
import { BsMoon, BsStarFill, BsStar } from 'react-icons/bs';
import { FaSpotify } from 'react-icons/fa';
import { API } from '../../utils/api';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { createDocumentTitle } from '../../utils/utils';
import { useUser } from '../../hooks/UserContext';

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const userData = useUser();

  // Função que pega a hora atual e personaliza a mensagem
  function getPeriodOfTheDay() {
    var today = new Date();
    var currentHour = today.getHours();

    if (currentHour < 12) {
      return (
        <div className="welcome">
          <h2>Bom dia, {userData.userDisplayName}</h2>
          <FiSun size={32} />
        </div>
      );
    } else if (currentHour < 18) {
      return (
        <div className="welcome">
          <h2>Boa tarde, {userData.userDisplayName}</h2>
          <FiSun size={32} />
        </div>
      );
    } else {
      return (
        <div className="welcome">
          <h2>Boa noite, {userData.userDisplayName}</h2>
          <BsMoon size={32} />
        </div>
      );
    }
  }

  async function getHomeData() {
    const homeData = await API.get('/home', {
      headers: {
        access_token: Cookies.get('access_token'),
      },
    });
    setHomeData(homeData.data);
  }

  useEffect(() => {
    createDocumentTitle('Home');
    getHomeData();
  }, []);

  var newReleases = homeData['new-releases'];
  return (
    <div className="container">
      <div className="content">
        <div className="home-content">
          <div className="left-side-content">
            {getPeriodOfTheDay()}

            <div className="trending">
              <div className="section-title">
                <h3>Novidades</h3>
                <span>VER MAIS</span>
              </div>
              <div className="releases">
                {newReleases
                  ? newReleases.map((release) => (
                      <div className="release-div" key={release.artist_id}>
                        <img
                          src={release.album_image}
                          alt={release.album_name}
                        />
                        <h4>{release.album_name}</h4>
                        <Link to={`/artist/${release.artist_id}`}>
                          <span>{release.artist}</span>
                        </Link>
                      </div>
                    ))
                  : ''}
              </div>
            </div>

            <div className="week-ranking">
              <div className="section-title">
                <h3>Ranking da Semana</h3>
                <span>VER MAIS</span>
              </div>
              <div className="ranking-list">
                <div className="ranking-item">
                  <div>
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
                      src="https://i.scdn.co/image/ab67616d00001e02c32340c5ed875c13a0a7173a"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>{'<atrás/além>'}</h4>
                      <span>O Terno</span>
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
                  </div>
                  <div className="ranking-actions">
                    <BsStar size={28} />
                    <FaSpotify size={28} className="spotify-url" />
                  </div>
                </div>
              </div>
            </div>

            <div className="week-ranking">
              <div className="section-title">
                <h3>Podcasts da Semana</h3>
                <span>VER MAIS</span>
              </div>
              <div className="ranking-list">
                <div className="ranking-item">
                  <div>
                    <h1>1</h1>
                    <img
                      src="https://i.scdn.co/image/ab67656300005f1f37cfabbe7ce6610e79e584bb"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Podpah</h4>
                      <span>Podpah</span>
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
                      src="https://i.scdn.co/image/58e4e737473db80f4fee1454b42f4d753c47e286"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Flow Podcast</h4>
                      <span>Flow</span>
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
                      src="https://i.scdn.co/image/d7104f59c00d9a467fee8f96009d9fc451894bcb"
                      alt="Álbum"
                    />
                    <div className="ranking-info">
                      <h4>Praia dos Ossos</h4>
                      <span>Rádio Novelo</span>
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
                    Nullam in interdum nulla.{' '}
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
          <div className="right-side-content">
            <div className="ranking-title">
              <h3>Ranking</h3>
              <h3 id="listen-to">Listen.to</h3>
            </div>
            <div className="ranking-listen">
              <div className="rk-item">
                <h1>1</h1>
                <img
                  src="https://i.scdn.co/image/ab67616d00001e0234ef8f7d06cf2fc2146f420a"
                  alt="Foto do Álbum"
                />

                <div className="album-info">
                  <h4>Sgt. Pepper's Lonely Hearts Club Band (Remastered)</h4>
                  <span>The Beatles</span>
                  <div className="score">
                    <BsStarFill size={18} />
                    <label>9.1</label>
                    <div className="spotify-url">
                      <FaSpotify size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rk-item">
                <h1>2</h1>
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02e319baafd16e84f0408af2a0"
                  alt="Foto do Álbum"
                />

                <div className="album-info">
                  <h4>A Night At The Opera (2011 Remaster)</h4>
                  <span>Queen</span>
                  <div className="score">
                    <BsStarFill size={18} />
                    <label>9.1</label>
                    <div className="spotify-url">
                      <FaSpotify size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rk-item">
                <h1>3</h1>
                <img
                  src="https://i.scdn.co/image/ab67616d00001e024ce8b4e42588bf18182a1ad2"
                  alt="Foto do Álbum"
                />

                <div className="album-info">
                  <h4>The Beatles (Remastered)</h4>
                  <span>The Beatles</span>
                  <div className="score">
                    <BsStarFill size={18} />
                    <label>9.1</label>
                    <div className="spotify-url">
                      <FaSpotify size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rk-item">
                <h1>4</h1>
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02f05e5ac32fdd79d100315a20"
                  alt="Foto do Álbum"
                />

                <div className="album-info">
                  <h4>The Dark Side of the Moon</h4>
                  <span>Pink Floyd</span>
                  <div className="score">
                    <BsStarFill size={18} />
                    <label>9.1</label>
                    <div className="spotify-url">
                      <FaSpotify size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rk-item">
                <h1>5</h1>
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02926f43e7cce571e62720fd46"
                  alt="Foto do Álbum"
                />

                <div className="album-info">
                  <h4>Unorthodox Jukebox</h4>
                  <span>Bruno Mars</span>
                  <div className="score">
                    <BsStarFill size={18} />
                    <label>9.1</label>
                    <div className="spotify-url">
                      <FaSpotify size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ver-mais">
                <span>VER MAIS</span>
              </div>
            </div>
            <div className="my-scores">
              <div className="ranking-title">
                <h3>Minhas Avaliações</h3>
              </div>
              <div className="my-scores-div">
                <div className="score-item">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e02926f43e7cce571e62720fd46"
                    alt="Foto do Álbum"
                  />
                  <div className="album-info">
                    <h4>Unorthodox Jukebox</h4>
                    <span>Bruno Mars</span>
                    <div className="score">
                      <BsStarFill size={18} />
                      <label>9.1</label>
                    </div>
                  </div>
                </div>
                <div className="score-item">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e02926f43e7cce571e62720fd46"
                    alt="Foto do Álbum"
                  />
                  <div className="album-info">
                    <h4>Unorthodox Jukebox</h4>
                    <span>Bruno Mars</span>
                    <div className="score">
                      <BsStarFill size={18} />
                      <label>9.1</label>
                    </div>
                  </div>
                </div>
                <div className="ver-mais">
                  <span>VER MAIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
