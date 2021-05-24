import axios from "axios";

// Endereço base da API
export const API = axios.create({
    baseURL: "http://18.116.235.11:8080/"
});

// Endereço da API Spotify
export const SPOTIFY_ID = axios.create({
    baseURL: "https://api.spotify.com/v1/"
})