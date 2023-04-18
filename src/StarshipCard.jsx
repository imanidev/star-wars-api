import { useState, useEffect } from 'react'; //useState and useEffect are used to fetch the data from the API and set it to the state

function Starships({ cards }) {
	//cards is the prop that is being passed to the StarshipCard component.
	return (
		<div className="cards">
			<button className="cardButton">
				{cards.name} //cards.name is the name of the starship
				{cards.crew} //cards.crew is the crew of the starship
			</button>
		</div>
	);
}

export default Starships;
