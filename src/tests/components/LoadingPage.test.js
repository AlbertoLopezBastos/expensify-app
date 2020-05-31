import React from 'react'
import { shallow } from 'enzyme';
import LoadinPage from '../../components/LoadingPage.js'

test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});
