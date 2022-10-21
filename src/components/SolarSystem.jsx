import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const headline = 'Planetas';

    return (
      <div data-testid="solar-system">

        <Title headline={ headline } />

        {planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />
        ))}
      </div>
    );
  }
}
export default SolarSystem;
