import { fetchChannelImageURL } from '@/API/channels';
import { useQuery } from '@tanstack/react-query';

export function useChannelUrlQuery(id: string) {
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => fetchChannelImageURL(id),
    staleTime: 1000 * 60 * 1,
    retry: 1,
  });

  return { url };
}
