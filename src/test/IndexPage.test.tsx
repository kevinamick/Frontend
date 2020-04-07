import { render } from '@testing-library/react';
import IndexPage from '../pages';

test('renders About page', () => {
  const { asFragment } = render(<IndexPage />);

  expect(asFragment()).toMatchSnapshot();
});
