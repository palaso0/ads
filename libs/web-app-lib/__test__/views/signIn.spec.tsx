import SignIn from '../../views/signIn'
import { render, screen } from '@testing-library/react';
import AppWrapper from '../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

beforeEach(()=>{
  render(<AppWrapper Component={SignIn} />);
})

describe('SignIn render components', () => {
  
  
  it('should render the component title SignUp', () => {
    const title = screen.getByText("Sign in")
    expect(title).toBeInTheDocument();
  });
  it('should render the component input Email Address', () => {
    const title = screen.getByText("Email Address")
    expect(title).toBeInTheDocument();
  });
  it('should render the component input Password', () => {
    const title = screen.getByText("Password")
    expect(title).toBeInTheDocument();
  });
  it('should render the button component SIGN IN', () => {
    //TODO
    const btnEl = screen.getByRole('button',{name: /password/i})
    expect(btnEl).toBeInTheDocument();
  });
  
})
