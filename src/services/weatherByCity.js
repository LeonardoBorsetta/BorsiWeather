
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88221a1677msh3dc9e7ea2e0f69fp15f4e3jsn9071822d16b6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export default function weatherByCity(query){

  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3&lang=es`;

  const response = fetch(url, options).then(res => res.json()).then(
    resp => {
      return resp
    }
  )
  return response
}