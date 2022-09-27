import SignIn from '../../views/signIn'
import { render, screen } from '@testing-library/react';
import AppWrapper from '../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

describe('SignIn render components', () => {
  render(<AppWrapper Component={SignIn} />);
  
  it('should render the component title SignUp', () => {
    const title = screen.getByText("Sign in")
    expect(title).toBeInTheDocument();
  });
  it('should render the component input Email Address', () => {
    const title = screen.getAllByText("Email")
    console.log(title);
    screen.debug(screen.getAllByText("Email"))
    
  });
  
})
