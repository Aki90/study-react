import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  test('renders correctly', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
