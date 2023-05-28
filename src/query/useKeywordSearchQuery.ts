import { fetchSearchVideos } from '@/API/search';
import { fetchVideosMostPopular } from '@/API/videos';
import { useQuery } from '@tanstack/react-query';
import { Video } from '@/types/videos';

function keywordSearch(keyword?: string) {
  if (keyword) return fetchSearchVideos(keyword);
  return fetchVideosMostPopular();
}

type resultQuery = {
  isLoading: boolean;
  isError: boolean;
  videos?: Video[];
};

export function useKeywordSearchQuery(keyword?: string): resultQuery {
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
