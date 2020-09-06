const axios = require('axios'); 


const argv = require('yargs').options({
    direccion: {
        alias: 'd', 
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);


const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?!location=Costa Rica',
    Headers:{'x-rapidapi-key': 'ec27c57862msha562ed16bd635e9p1a6ce3jsn6c373ca5b4cb'}
})


instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log('Erro!!!', err);
    });