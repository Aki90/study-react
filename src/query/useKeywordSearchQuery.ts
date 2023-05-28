import { fetchSearchVideos } from '@/API/search';
import { fetchVideosMostPopular } from '@/API/videos';
import { useQuery } from '@tanstack/react-query';

function keywordSearch(keyword?: string) {
  if (keyword) return fetchSearchVideos(keyword);
  return fetchVideosMostPopular();
}

export function useKeywordSearchQuery(keyword?: string) {
  const {
    isLoading,
    isError,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => keywordSearch(keyword),
  });

  return { isLoading, isError, videos };
}
