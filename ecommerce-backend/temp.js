import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://movies-ratings2.p.rapidapi.com/ratings',
  headers: {
    'x-rapidapi-key': '782589dc8cmsha0d0c4e965581b2p136a11jsn7e925838c254',
    'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error({error});
	}
}

fetchData();