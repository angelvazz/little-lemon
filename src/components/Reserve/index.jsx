import React, { useState } from 'react';
import {
  DivContainer,
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
} from './ReserveElements';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Booking Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nParty Size: ${formData.guests}`
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
    });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <DivContainer>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </DivContainer>
        <DivContainer>
          <FormLabel>Email:</FormLabel>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </DivContainer>
        <DivContainer>
          <FormLabel>Phone:</FormLabel>
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </DivContainer>
        <DivContainer>
          <FormLabel>Date:</FormLabel>
          <FormInput
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </DivContainer>
        <DivContainer>
          <FormLabel>Time:</FormLabel>
          <FormInput
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </DivContainer>
        <DivContainer>
          <FormLabel>Party Size:</FormLabel>
          <FormInput
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </DivContainer>
        <DivContainer>
          <FormButton type="submit">Book Table</FormButton>
        </DivContainer>
      </form>
    </FormContainer>
  );
}
