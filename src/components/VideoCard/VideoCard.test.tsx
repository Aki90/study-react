/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render, act } from '@testing-library/react';
import { withRouter } from '@/tests/utils';
import VideoCard from './VideoCard';

import { Route, useLocation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('<VideoCard />', () => {
  const video = {
    id: 'id',
    snippet: {
      title: 'title',
      channelId: '1',
      channelTitle: 'channelTitle',
      publishedAt: new Date(),
      thumbnails: {
        medium: {
          url: 'http://image/',
        },
      },
    },
  };

  test('renders correctly', async () => {
    const { container } = render(
      withRouter(<Route path="/" element={<VideoCard video={video} />} />),
    );

    const image = screen.getByRole('img') as HTMLImageElement;
    const { thumbnails, title } = video.snippet;
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('video item 클릭 시, state 를 담아 video detail 페이지로 이동해야 한다.', async () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }

    render(
      withRouter(
        <>
          <Route path="/" element={<VideoCard video={video} />} />
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>,
      ),
    );

    const card = screen.getByRole('listitem');

    await act(async () => {
      userEvent.click(card);
    });

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  });
});
