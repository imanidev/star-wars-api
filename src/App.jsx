import { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';
import { GetAllStarships } from './Services/sw-api';
import './App.css';

function App() {
	const [ starships, setStarships ] = useState(null); //null is used as a placeholder because the data is not there yet

	useEffect(() => {
		//useEffect is used to fetch the data from the API and set it to the state
		console.log(starships); //console log the data to see if it is there or not
	}, []); //the empty array is used to make sure that the useEffect only runs once when the page is loaded. it's called a dependency array

	function ifExists() {
		//the ifExists function is used to check if the data is there or not.
		//to validate if the data is there
		if (starships === null) {
			//if the data is not there, then fetch the data from the API
			GetAllStarships().then((data) => {
				//then is used to wait for the data to be fetched from the API/
				setStarships(data); //set the data to the state so that it can be used in the map function below
			});
		}
	}

	return (
		<div>
			{starships ? ( // if the data is there, then map through it
				starships.results.map((item, index) => {
					//map through the data and return the StarshipCard component for each item in the array
					return <StarshipCard key={index} cards={item} />; //cards is the prop that is being passed to the StarshipCard component and item is the data that is being passed to the prop. key is used to identify each item in the array.
				})
			) : (
				ifExists() //if the data is not there, then run the ifExists function
			)}
		</div>
	);
}

export default App;
