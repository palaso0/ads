import { fireEvent, render, screen } from '@testing-library/react';

import ModalHeader from '../../../ui/adModal/components/modalHeader'
import '@testing-library/jest-dom/extend-expect'
import React from 'react';

const title= "titleTest"
const photo= "photoTest"
const date= "dateTest"
const userName= "userTest"
const category= "categoryTest"
beforeEach(() => {
    render(<ModalHeader title={title} photo={photo} date={date} userName={userName} category={category}/>);
})

describe('Add Modal Header form render components', () => {
    it('should render the component props text', () => {
        const title = screen.getByText(/titleTest/i)
        const photo = screen.getByAltText(/Profile/i)
        const date = screen.getByText(/dateTest/i)
        const userName = screen.getByText(/userTest/i)
        const category = screen.getByText(/categoryTest/i)

        expect(title).toBeInTheDocument();     
        expect(photo).toBeInTheDocument();     
        expect(date).toBeInTheDocument();     
        expect(userName).toBeInTheDocument();     
        expect(category).toBeInTheDocument();     
    });
})