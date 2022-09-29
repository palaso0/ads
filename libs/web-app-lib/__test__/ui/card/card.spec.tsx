import { render, screen } from '@testing-library/react';
import AppWrapper from '../../utils/appWrapper'
import AdCard from '../../../ui/card/adCard'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
    render(<AdCard
        adId={1}
        title={"Card Title"}
        photo={"imgCat.jpg"}
        date={"12/12/12"}
        text={"Description text"}
        image={"imageExample"}
    />);
})

describe('Add Category form render components', () => {
    it('should render the component title Card Title', () => {
        const title = screen.getByText("Card Title")
        expect(title).toBeInTheDocument();
    });
    it('should render the component subtitle 12/12/12', () => {
        const title = screen.getByText("12/12/12")
        expect(title).toBeInTheDocument();
    });
    it('should render the component img Image', () => {
        const title = screen.getByAltText(/avatar/i)
        expect(title).toBeInTheDocument();
    });
    it('should render the component img Photo', () => {
        const title = screen.getByAltText(/Ad/i)
        expect(title).toBeInTheDocument();
    });

    it('should render the component label Description Text', () => {
        const title = screen.getByText("Description text");
        expect(title).toBeInTheDocument();
    });
})
