import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://www.googleapis.com/youtube/v3/channels',
    (req, res, ctx) => {
      const mockUrl = {
        items: [
          {
            snippet: {
              thumbnails: {
                default: {
                  url: 'url',
                },
              },
            },
          },
        ],
      };
      return res(ctx.status(200), ctx.json(mockUrl));
    },
  ),
];
