
import SignUp from '../../views/signUp'
import { render } from '@testing-library/react';
import AppWrapper from '../utils/appWrapper'

import '@testing-library/jest-dom/extend-expect'

describe('SignIn', () => {
    it('should render the component SignUp', () => {

        const component = render(<AppWrapper Component={SignUp} />);

        expect(component).toMatchSnapshot();

    });
})
