import { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';
import { GetAllStarships } from './Services/sw-api';

function App() {
	const [ starships, setStarships ] = useState(null);

	useEffect(
		() => {
			console.log(starships);
		},
		[]
	);

	function ifExists() {
		if (starships === null) {
			GetAllStarships().then((data) => {
				setStarships(data);
			});
		}
	}

	return (
		<div>
			{starships ? 
				starships.results.map((item, index) => {
					return <StarshipCard key ={index} cards={item} />;
				})
			: 
				ifExists()
			}
		</div>
	);
}

export default App;
