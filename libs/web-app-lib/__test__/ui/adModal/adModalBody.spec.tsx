import { fireEvent, render, screen } from '@testing-library/react';
import ModalBody from '../../../ui/adModal/components/modalBody'
import '@testing-library/jest-dom/extend-expect'

describe('Add Modal Body form render components', () => {
    it('should render the component props text', () => {
        const textTest = "Test";
        render(<ModalBody text = {textTest}/>);
        const title = screen.getByText("Test")
        expect(title).toBeInTheDocument();
    });
})
