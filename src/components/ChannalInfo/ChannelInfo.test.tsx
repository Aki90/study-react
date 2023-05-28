import { wrapper, withRouter } from '@/tests/utils';
import ChannelInfo from './ChannelInfo';
import { Route } from 'react-router';
import { render, screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { rest } from 'msw';

test('renders correctly', async () => {
  const { asFragment } = render(
    wrapper(
      withRouter(
        <Route path="/" element={<ChannelInfo id="id" name="channel" />} />,
      ),
    ),
  );
  await screen.findByRole('img');
  expect(asFragment()).toMatchSnapshot();
});

test('url 이 없다면, 이미지가 나타나지 않아야 한다.', () => {
  function overrideResultWithErrorData() {
    server.use(
      rest.get('/search', (_, res, ctx) =>
        res(ctx.status(404), ctx.json({ errorMessage: 'Not Found' })),
      ),
    );
  }
  overrideResultWithErrorData();

  render(
    wrapper(
      withRouter(
        <Route path="/" element={<ChannelInfo id="id" name="channel" />} />,
      ),
    ),
  );

  expect(screen.queryByRole('img')).toBeNull();
});
