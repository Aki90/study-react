import { instanceChannels } from './index';

export async function fetchChannelImageURL(id: string): Promise<string> {
  const { data } = await instanceChannels.get('/', {
    params: { part: 'snippet', id },
  });

  return data.items[0].snippet.thumbnails.default.url;
}
