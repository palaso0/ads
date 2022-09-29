import { fireEvent, render, screen } from '@testing-library/react';
import ModalFooting from '../../../ui/adModal/components/modalFooting'
import '@testing-library/jest-dom/extend-expect'

describe('Add Modal Footing form render components', () => {
    it('should render the component props text', () => {
        const mockHandleCloseModal = jest.fn();
        render(<ModalFooting handleCloseModal={mockHandleCloseModal}/>);
        const btnClose = screen.getByRole('button', { name: /CLOSE/i })
        expect(btnClose).toBeInTheDocument();        
    });
    it('should call the function close modal when clicking the button Close', () => {
        const mockHandleCloseModal = jest.fn();
        render(<ModalFooting handleCloseModal={mockHandleCloseModal}/>);
        const btnClose = screen.getByRole('button', { name: /CLOSE/i })      
        fireEvent.click(btnClose)
        expect(mockHandleCloseModal).toBeCalled()
    });
})
