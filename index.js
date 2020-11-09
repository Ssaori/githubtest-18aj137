

//console.log("Hello World");

const API_KEY = 'XOIjWPrxDDw9CLL90kDDG3TadQ652cDGPM58Tu0F';
const ENDPOINT = 'https://opendata.resas-portal.go.jp';
const axios = require('axios');
const instance = axios.create({
  baseURL: ENDPOINT,
  headers: { 'X-API-KEY': API_KEY }
});
async function run() {
  try {
    let res = await instance.get('/api/v1/prefectures');
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
run();


