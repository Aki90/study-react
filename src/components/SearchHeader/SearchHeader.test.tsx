import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Route } from 'react-router-dom';
import SearchHeader from '@/components/SearchHeader/SearchHeader';
import { withRouter } from '@/tests/utils';

test('renders correctly', () => {
  const component = renderer.create(
    withRouter(<Route path="/" element={<SearchHeader />} />),
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('url 경로에 따른 키워드가 화면에 표기되어야 한다.', () => {
  render(
    withRouter(<Route path="/:keyword" element={<SearchHeader />} />, '/bts'),
  );
  expect(screen.getByDisplayValue('bts')).toBeInTheDocument();
});

test('검색버튼 클릭 시, 경로 이동 확인', async () => {
  const searchKeyword = 'fake-keyword';

  render(
    withRouter(
      <>
        <Route path="/" element={<SearchHeader />} />
        <Route
          path={`/videos/${searchKeyword}`}
          element={<p>{`Search result for ${searchKeyword}`}</p>}
        />
      </>,
    ),
  );

  const searchButton = screen.getByRole('button');
  const searchInput = screen.getByRole('textbox');

  userEvent.type(searchInput, searchKeyword);
  userEvent.click(searchButton);

  expect(screen.getByDisplayValue(searchKeyword)).toBeInTheDocument();
});
