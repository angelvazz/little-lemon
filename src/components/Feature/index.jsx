import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Reserve a table</h1>
      <p>Reserve a table for your special moment.</p>
      <FeatureButton>Reserve Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
