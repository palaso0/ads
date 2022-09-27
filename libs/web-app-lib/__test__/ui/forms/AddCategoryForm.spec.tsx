import AddCategoryForm from '../../../ui/forms/addCategoryForm'
import { render, screen } from '@testing-library/react';
import AppWrapper from '../../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
  render(<AppWrapper Component={AddCategoryForm} />);
})

describe('Add Category form render components', () => {
  it('should render the component title Add Category', () => {
    const title = screen.getByText("Add Category")
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
