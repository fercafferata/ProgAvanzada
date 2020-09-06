//tengo un servidor web corriendo
const http = require('http');


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Fernanda',
        edad: 21,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    res.end()
})
.listen(8000);

console.log('Escuchando el puerto 8000');
