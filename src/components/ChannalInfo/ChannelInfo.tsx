import { useChannelUrlQuery } from '@/query/useChannelUrlQuery';
import styles from './ChannelInfo.module.scss';

export default function ChannalInfo({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const { url } = useChannelUrlQuery(id);

  return (
    <div className={styles.ChannalInfo}>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
