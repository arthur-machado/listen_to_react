import React, { useState, useEffect, useCallback } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { FaSpotify } from 'react-icons/fa';
import { GrLike, GrDislike } from 'react-icons/gr';
import './styles.css';
import { API } from '../../utils/api';
import Cookies from 'js-cookie';
import Modal from '../../components/Modal/index';
import { createDocumentTitle } from '../../utils/utils';
import { useUser } from '../../hooks/UserContext';

const Artist = (props) => {
  const [artistData, setArtistData] = useState([]);

  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const userData = useUser();

  const getArtistData = useCallback(async () => {
    const params = props.match.params;
    const response = await API.get(`/artist/${params.id}`, {
      headers: {
        access_token: Cookies.get('access_token'),
      },
    });
    setArtistData(response.data.artist);
  }, [props.match.params]);

  function handleChange(event) {
    let { value } = event.target;
    setComment(value);
  }

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  async function createNewComment() {
    const params = props.match.params;
    const json_obj = {
      username: userData.username,
      user_display_name: userData.userDisplayName,
      user_display_image: userData.userImage,
      content: comment,
    };
    try {
      await API.post(`/artist/${params.id}/comment`, json_obj);
      // window.location.reload();
      getArtistData();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getArtistData();
  }, [getArtistData]);

  var comments = artistData.comments;
  var albums = artistData['albums'];
  var topTracks = artistData['top_tracks'];
  const blurContent = {
    filter: 'blur(8px)',
  };

  if (artistData.name) {
    createDocumentTitle(artistData.name);
  }

  return (
    <div className="container">
      <Modal
        onClose={toggleModal}
        show={showModal}
        modalTitle={'Excluir Comentário'}
        type="delete"
      >
        Tem certeza de que deseja excluir o comentário?
      </Modal>
      <div className="content" style={showModal ? blurContent : null}>
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
                window.open(`${artistData.hrefSpProfile}`, '_blank')
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
              {topTracks
                ? topTracks.map((track, index) => (
                    <div className="ranking-item" key={track.track_name}>
                      <div>
                        <h1>{index + 1}</h1>
                        <img src={track.album_image} alt="Álbum" />
                        <div className="ranking-info">
                          <h4>{track.track_name}</h4>
                          <span>{track.artist_name}</span>
                          <div className="score">
                            <BsStarFill size={18} />
                            <label>{track.score}</label>
                          </div>
                        </div>
                      </div>
                      <div className="ranking-actions">
                        <BsStar size={28} />
                        <FaSpotify size={28} className="spotify-url" />
                      </div>
                    </div>
                  ))
                : ''}
            </div>
          </div>

          <div className="discography">
            <div className="section-title">
              <h3>Discografia</h3>
              <span>VER TUDO</span>
            </div>
            <div className="releases">
              {albums
                ? albums.map((album) => (
                    <div className="release-div">
                      <img src={album.images[1].url} alt="Álbum" />
                      <h4>{album.name}</h4>
                      <span>{album.artists[0].name}</span>
                    </div>
                  ))
                : ''}
            </div>
            <div className="comments">
              <div className="section-title">
                <h3>Comentários</h3>
                <span>VER TUDO</span>
              </div>
              <div className="comments-list">
                <div className="comment-div">
                  <div className="add-comment">
                    <img src={userData.userImage} alt="Foto de Usuário" />

                    <input
                      type="text"
                      className="comment-box"
                      required
                      placeholder="Adicionar um comentário"
                      maxLength={90}
                      onChange={(e) => handleChange(e)}
                    />
                    <button
                      type="submit"
                      className="rate-btn"
                      onClick={() => createNewComment()}
                      disabled={comment === ''}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
                {comments
                  ? comments.map((comm, index) => (
                      <div className="comment" key={index}>
                        <img
                          src={comm.userProfileImage}
                          alt="Foto de Usuário"
                        />
                        <div className="name-comment">
                          <span>{comm.userDisplayName}</span>
                          <p>{comm.content}</p>
                          <div className="comment-likes">
                            <div className="like-actions">
                              <GrLike size="16" />
                              {comm.likes}
                            </div>
                            <div className="like-actions">
                              <GrDislike size="16" />
                              {comm.dislikes}
                            </div>
                            {userData.username === comm.username && (
                              <label
                                onClick={(e) => {
                                  showModal(e);
                                }}
                              >
                                Excluir
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
