/* eslint-disable @typescript-eslint/no-unused-vars */
import ChannelInfo from '@/components/ChannalInfo/ChannelInfo';
import { useLocation } from 'react-router';
import styles from './VideoDetail.module.scss';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className={styles.VideoDetail}>
      <article>
        <iframe
          id="player"
          title={title}
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        />
        <div className={styles.VideoDetail__info}>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
    </section>
  );
}
