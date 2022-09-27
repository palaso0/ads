import SignUp from '../../views/signUp'

import { render, screen } from '@testing-library/react';
import AppWrapper from '../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
    render(<AppWrapper Component={SignUp} />);
})

describe('SignUp render components', () => {
    it('should render the component title SignUp', () => {
        const title = screen.getByText("Sign up")
        expect(title).toBeInTheDocument();
    });
    it('should render the component title User Type', () => {
        const title = screen.getAllByText(/User Type/)
        expect(title[0]).toBeInTheDocument();
    });
    it('should render the component First Name', () => {
        const title = screen.getByText("First Name")
        expect(title).toBeInTheDocument();
    });
    it('should render the component title Last Name', () => {
        const title = screen.getByText("Last Name")
        expect(title).toBeInTheDocument();
    });
    it('should render the component title Email Address', () => {
        const title = screen.getByText("Email Address")
        expect(title).toBeInTheDocument();
    });
    it('should render the component input Password', () => {
        const title = screen.getByText("Password")
        expect(title).toBeInTheDocument();
    });
    it('should render the button component SIGN UP', () => {
        const btnEl = screen.getByRole('button', { name: /sign up/i })
        expect(btnEl).toBeInTheDocument();
    });
    it('should render the link "Already have an account?"', () => {
        const link = screen.getByText(/Already have an account?/i)
        expect(link).toBeInTheDocument();
    })
    it('should render a message for copyright', () => {
        const link = screen.getByText(/Orion's Adds/i)
        expect(link).toBeInTheDocument()
    })
})
