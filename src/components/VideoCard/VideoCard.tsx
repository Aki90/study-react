import { formatAgo } from '@/utils/date';
import { useNavigate } from 'react-router';
import styles from './VideoCard.module.scss';
import { Video } from '@/types/videos';

export default function VideoCard({ video }: { video: Video }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const handleNavigate = (): void => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li className={styles.VideoCard} onClick={handleNavigate}>
      <img
        className={styles.thumbnail}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className={styles.title}>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
