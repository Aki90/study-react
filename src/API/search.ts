import { instanceSearch } from './index';
import { PreviousParsingVideo, Video } from '@/types/videos';

export async function fetchSearchVideos(keyword: string): Promise<Video[]> {
  const { data } = await instanceSearch.get('/', {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      q: keyword,
    },
  });

  return data.items.map((item: PreviousParsingVideo) => ({
    ...item,
    id: item.id.videoId,
  }));
}
