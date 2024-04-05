
let url = "https://dt207g-moment2.onrender.com/api/cv/";



/*funktionen som gör alla api-anrop med async await. Nykeln är en variabel i global scope. url och hostadresser skickas in i funktionen när den anropas.*/
async function api() {
      const response = await fetch(url)

      const result = await response.json();
        console.log(result);  
  }

  api();