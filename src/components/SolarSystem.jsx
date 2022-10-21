import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const headline = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
      </div>
    );
  }
}
export default SolarSystem;
