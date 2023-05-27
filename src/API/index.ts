import axios, { AxiosInstance } from 'axios';

function createInstance(url: string): AxiosInstance {
  const instance = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3${url}`,
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  });

  return instance;
}

export const instanceSearch = createInstance('/search');
export const instanceChannels = createInstance('/channels');
export const instanceVideos = createInstance('/videos');
