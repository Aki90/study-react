import { instanceVideos } from './index';
import { Video } from '@/types/videos';

export async function fetchVideosMostPopular(): Promise<Video[]> {
  const { data } = await instanceVideos.get('/', {
    params: {
      part: 'snippet',
      maxResults: 25,
      chart: 'mostPopular',
    },
  });

  return data.items;
}
