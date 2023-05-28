import { useParams } from 'react-router-dom';
import VideoCard from '@/components/VideoCard/VideoCard';
import styles from './Videos.module.scss';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import { useKeywordSearchQuery } from '@/query/useKeywordSearchQuery';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, isError, videos } = useKeywordSearchQuery(keyword);

  return (
    <main className={styles.Videos}>
      {isLoading && <Loading />}
      {isError && <Error />}

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
