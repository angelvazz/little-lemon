import React from 'react';
import { shallow } from 'enzyme';
import BookingForm from '../src/components/Reserve/index';
import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('BookingForm', () => {
  let wrapper;
  let onBookingMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<BookingForm onBooking={onBookingMock} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the onBooking callback when the form is submitted', () => {
    // Fill out the form inputs
    wrapper
      .find('input[name="name"]')
      .simulate('change', { target: { name: 'name', value: 'John Smith' } });
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'john@example.com' },
    });
    wrapper
      .find('input[name="phone"]')
      .simulate('change', { target: { name: 'phone', value: '555-555-5555' } });
    wrapper
      .find('input[name="date"]')
      .simulate('change', { target: { name: 'date', value: '2022-01-01' } });
    wrapper
      .find('input[name="time"]')
      .simulate('change', { target: { name: 'time', value: '19:00' } });
    wrapper
      .find('input[name="guests"]')
      .simulate('change', { target: { name: 'guests', value: '4' } });

    // Submit the form
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    // Check that the onBooking callback was called with the correct time value
    expect(onBookingMock).toHaveBeenCalledWith('19:00');
  });
});
