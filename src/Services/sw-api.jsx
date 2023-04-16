//All API/fetch calls are made here

export async function GetAllStarships() {
	const response = await fetch('https://swapi.dev/api/starships/');
	const data = await response.json();
	return data;
}
