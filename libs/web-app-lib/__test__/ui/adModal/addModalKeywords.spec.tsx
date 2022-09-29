import { fireEvent, render, screen } from '@testing-library/react';
import ModalKeywords from '../../../ui/adModal/components/modalKeywords'
import '@testing-library/jest-dom'
beforeEach(() => {
    const keywords:string[] = ["key1Test","key2Test","key3Test"]
    render(<ModalKeywords keywords={keywords}/>);
})

describe('Add Modal Image Carrusel render components', () => {
    it('should render the key chip component', () => {
        const key1 = screen.getByText(/key1Test/i)
        const key2 = screen.getByText(/key2Test/i)
        const key3 = screen.getByText(/key3Test/i)

        expect(key1).toBeInTheDocument()
        expect(key2).toBeInTheDocument()
        expect(key3).toBeInTheDocument()
    });
})
