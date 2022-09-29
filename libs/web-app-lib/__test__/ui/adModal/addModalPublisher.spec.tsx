import { fireEvent, render, screen } from '@testing-library/react';
import ModalPublisher from '../../../ui/adModal/components/modalPublisher'
import '@testing-library/jest-dom'


beforeEach(() => {
    const email = "emailTest"
    const lastName = "lastNameTest"
    const name = "nametest"
    const cellphone = "cellphoneTest"
    render(<ModalPublisher
        email={email}
        lastName={lastName}
        name={name}
        cellphone={cellphone}
    />);
})

describe('Add Modal Image Carrusel render components', () => {
    it('should render the key chip component', () => {

        const title = screen.getByText(/Contact info/i)
        const email = screen.getByText(/emailTest/i)
        const lastName = screen.getByText(/lastNameTest/i)
        const name = screen.getByText(/nametest/i)
        const cellphone = screen.getByText(/cellphone/i)

        expect(title).toBeInTheDocument()
        expect(email).toBeInTheDocument()
        expect(lastName).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(cellphone).toBeInTheDocument()
    });
})
