/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatAgo } from '@/utils/date';
import { useNavigate } from 'react-router';
import styles from './VideoCard.module.scss';

export default function VideoCard({
  video,
  videoId,
}: {
  video: any;
  videoId: string;
}) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const handleNavigate = (): void => {
    navigate(`/videos/watch/${videoId}`, { state: { video } });
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
