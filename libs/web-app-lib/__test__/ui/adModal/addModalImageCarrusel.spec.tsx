import { fireEvent, render, screen } from '@testing-library/react';
import ModalImageCarrusel from '../../../ui/adModal/components/modalImageCarrusel'

beforeEach(() => {
    const images = ["img1","img2","img3"]
    render(<ModalImageCarrusel images={images}/>);
})

describe('Add Modal Image Carrusel render components', () => {
    it('should render the images component', () => {
        const altImgs = screen.getAllByAltText(/product/)
        expect(altImgs.length).toBeGreaterThan(0)
    });
})
