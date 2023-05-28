import { fetchChannelImageURL } from '@/API/channels';
import { useQuery } from '@tanstack/react-query';

export function useChannelUrlQuery(id: string): { url?: string } {
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => fetchChannelImageURL(id),
  });

  return { url };
}
