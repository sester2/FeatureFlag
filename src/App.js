import React from 'react';
import './App.css';
import { FeatureFlag, FeatureFlagProvider } from './context/FeatureFlag';

const Example = () => {

  return (
    <>

      <Feature feature="isGooglePlayEnabled" value={true}>
        Google
      </Feature>
      <Feature feature="isApplePayEnabled" value={false}>
        ApplePay
      </Feature>
    </>
  );
};

const Feature = ({ feature, children, value }) => {
  const { features } = React.useContext(FeatureFlag);
  return features[feature] === value ? children : null;
}

export default function App() {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
}






