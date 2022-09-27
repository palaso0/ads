import AddSuggestedCategoryForm from '../../../ui/forms/addSuggestCategoryForm'
import { render, screen } from '@testing-library/react';
import AppWrapper from '../../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
    render(<AppWrapper Component={AddSuggestedCategoryForm} />);
})

describe('Add  Suggested Category form render components', () => {
    it('should render the component title Suggest Category', () => {
        const title = screen.getByText("Suggest Category")
        expect(title).toBeInTheDocument();
    });
    it('should render the component input Category name', () => {
        const title = screen.getAllByText("Category name")
        expect(title[0]).toBeInTheDocument();
    });

    it('should render the button component ACCEPT', () => {
        const btnAccept = screen.getByRole('button', { name: /ACCEPT/i })
        expect(btnAccept).toBeInTheDocument();
    });
})
