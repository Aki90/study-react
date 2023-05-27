import { instanceSearch } from './index';

export async function fetchSearchVideos(keyword: any) {
  const { data } = await instanceSearch.get('/', {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      q: keyword,
    },
  });
  return data.items.map((item: any) => ({ ...item, id: item.id.videoId }));
}

export async function fetchRelatedVideos(id: any) {
  const { data } = await instanceSearch.get('/', {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      relatedToVideoId: id,
    },
  });

  return data.items.map((item: any) => ({ ...item, id: item.id.videoId }));
}
