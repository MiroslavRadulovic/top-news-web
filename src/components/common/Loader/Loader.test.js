import { render } from '@testing-library/react';
import Loader from './Loader';

it('loader renders successfuly', () => {
  const { queryByTitle } = render(<Loader />);
  const loader = queryByTitle('loader');

  expect(loader).toBeTruthy();
});
