import React, { Component } from "react";

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
                backgroundImage: `url("https://i.scdn.co/image/ab6761610000e5eb2bd9e03d04f2a168e4414eea")`,
              }}
            >
              <div className="artist-tags">
                <div className="artist-info">
                  <button id="artist-numbers">
                    <div className="numbers">
                      <p>
                        <b>152k</b> fãs
                      </p>
                      <p>
                        <b>24°</b> ranking
                      </p>
                      <p>
                        <b>201.245</b> reviews
                      </p>
                    </div>
                  </button>
                  <button id="artist-name">Tim Maia</button>
                  <button id="artist-tag">ARTISTA</button>
                </div>
              </div>
              <div className="artist-score">
                <button id="avg">MÉDIA</button>
                <button id="score">9.1</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Artista;
