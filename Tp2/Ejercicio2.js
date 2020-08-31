const Datos = async() => {
    
    const apikey = '800ee3a851285b5d430918fce0b3e647';
    const respuesta = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apikey}&format=json&limit=10`);
    const {artists} = await respuesta.json();
    
    console.log(artists);
    
    let crearTabla = 
                    `<tr>
                        <td>ARTISTA</td>
                        <td>REPRODUCCIONES</td>
                        <td>OYENTES</td>
                    </tr>`;
    
    artists.artist.forEach(artista => {
        crearTabla += `
        <tr>
            <td>${artista.name}</td>
            <td>${artista.playcount}</td>
            <td>${artista.listeners}</td>
        </tr>
        `;
        
        document.querySelector("table").innerHTML = crearTabla;
    });


}   


Datos()