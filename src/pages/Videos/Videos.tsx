/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchVideos } from '@/API/search';
import { fetchVideosMostPopular } from '@/API/videos';
import axios from 'axios';
import VideoCard from '@/components/VideoCard/VideoCard';
import styles from './Videos.module.scss';

export default function Videos() {
  const { keyword } = useParams();

  function keywordSearch(keyword?: string) {
    if (keyword) return fetchSearchVideos(keyword);
    return fetchVideosMostPopular();
  }

  async function fakeSearch(keyword?: string) {
    const { data } = await axios.get(
      `/mocks/${keyword ? 'search' : 'popular'}.json`,
    );

    return data.items;
  }

  const {
    isLoading,
    isError,
    data: videos,
  } = useQuery({
    queryKey: ['todo', keyword],
    queryFn: () => fakeSearch(keyword),
    // queryFn: () => keywordSearch(keyword),
    staleTime: 1000 * 60 * 1,
  });

  return (
    <main className={styles.Videos}>
      {isLoading && <div>loading...</div>}
      {isError && <div>error</div>}

      <ul>
        {videos?.map((video: any) => (
          <VideoCard
            key={keyword ? video.id.videoId : video.id}
            videoId={keyword ? video.id.videoId : video.id}
            video={video}
          />
        ))}
      </ul>
    </main>
  );
}
