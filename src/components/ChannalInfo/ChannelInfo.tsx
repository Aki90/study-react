import { fetchChannelImageURL } from '@/API/channels';
import { useQuery } from '@tanstack/react-query';
import Loading from '../common/Loading';
import Error from '../common/Error';

export default function ChannalInfo({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  async function fakeUrl() {
    const data =
      'https://yt3.ggpht.com/8IG_vczSZLUYnDvfHFusOMdIFRpPP8xoKX6z2BLoyALI2hep-PrlLjKEp8qnrnOjTDbAF2w4kQ=s88-c-k-c0x00ffffff-no-nd-rj';

    return data;
  }

  const {
    isLoading,
    isError,
    data: url,
  } = useQuery({
    queryKey: ['channel', id],
    // queryFn: () => fetchChannelImageURL(id),
    queryFn: () => fakeUrl(),
    staleTime: 1000 * 60 * 1,
    retry: 3,
  });

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {url && <img src={url} alt={name} />}
      <p></p>
    </div>
  );
}
