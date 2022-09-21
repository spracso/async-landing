import fetch from "node-fetch";
//const fetch = require("node-fetch");

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC4O60DOcUzPg6OQzYbZZYGA&part=snippet%2Cid&order=date&maxResults=6';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fd700b5406msh5a2709bdab30801p10591ajsnef099b1bd7fb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));