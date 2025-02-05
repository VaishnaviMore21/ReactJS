import React from 'react';

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      <Car brand="Creta"/>
    </>
  );
}

// Define the App component and export it
function App() {
  return <Garage />;
}

export default App;
