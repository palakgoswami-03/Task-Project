require('dotenv').config()
const{ error } = require('console')
let readline = require('readline')
const API_KEY = process.env.API_KEY;
// const API_KEY = 'b5f11fdd7f72c29c33ccff4dc167bb07'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout})

async function weathercli(){
    const input = rl.question('enter city: ',(city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        fetch(url)
        .then((response) =>{
            if(!response.ok){
                throw new Error(`HTTP ERROR! STATUS:${response.status}`)

            }
            return response.json();
        })
        .then((data) => {
            console.log(`temperature in ${city}: ${data.main.temp}°C`)
            console.log(`weather: ${data.weather[0].description}` )
        })
        .catch((error) => {
            console.error('error fetching data :',error) 
        })
    })
}
weathercli()