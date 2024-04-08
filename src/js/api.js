
let url = "localhost:3000/api/cv";



/*funktionen som gör alla api-anrop med async await. Nykeln är en variabel i global scope. url och hostadresser skickas in i funktionen när den anropas.*/
/*async function api(url) {
      const response = await fetch(url);

      const result = await response.json();
        console.log(result);  
  }

  api(url);
*/

/*
async function api(url) {
      try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);

      } catch (error) {
            console.error(error);
      }
}

api(url);
*/
api();

async function api() {
      let response = await fetch('http://localhost:3000/api/cv', {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json'
            },
           // body: JSON.stringify(user)
      });

      let data = await response.json();
      console.log(data);
}
