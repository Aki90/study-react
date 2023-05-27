import { instanceVideos } from './index';

export async function fetchVideosMostPopular() {
  const { data } = await instanceVideos.get('/', {
    params: {
      part: 'snippet',
      maxResults: 25,
      chart: 'mostPopular',
    },
  });

  return data.items;
}
