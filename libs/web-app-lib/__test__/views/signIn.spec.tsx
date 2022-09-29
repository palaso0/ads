import React from 'react';
import SignIn from '../../views/signIn'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AppWrapper from '../utils/appWrapper'
import {prettyDOM} from '@testing-library/dom'
import { debug } from 'console';

beforeEach(() => {
  render(<AppWrapper Component={SignIn} />);
})

describe('SignIn render components', () => {


  it('should render the component title SignIn', () => {
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
    const btnEl = screen.getByRole('button', { name: /sign in/i })
    expect(btnEl).toBeInTheDocument();
  });
  it('should render the link "Don\'t have an account? Sign Up"', () => {
    const link = screen.getByText(/Don't have an account?/i)
    expect(link).toBeInTheDocument();
  })
  it('should render a message for copyright', () => {
    const link = screen.getByText(/Orion's Adds/i)
    expect(link).toBeInTheDocument()
  })

})
