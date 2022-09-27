import NavBar from '../../ui/navbar/navbar'
import { render, screen } from '@testing-library/react';
import AppWrapper from '../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
  render(<AppWrapper Component={NavBar} />);
})

describe('NavBar render components', () => {
  it('should render the component title Welcome', () => {
    const title = screen.getByText(/Welcome/i)
    expect(title).toBeInTheDocument();
  });
  it('should render the component Search', () => {
    const title = screen.queryByPlaceholderText(/Search/i)
    expect(title).toBeInTheDocument();
  });

  it('should render the button component Logout', () => {
    const title = screen.getByText(/Logout/i)
    expect(title).toBeInTheDocument();
  });
})
