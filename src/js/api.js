let url = "localhost:3000/api/cv";
const alert = document.getElementById("alert");
const alert2 = document.getElementById("alert2");


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

//apiGet();

export async function apiGet() {
      const url = 'http://localhost:3000/api/cv';
      try {
            const response = await fetch(url);
            const result = await response.json();
            /**/
            //console.log(result);
            return result;
      } catch (error) {
            console.error(error);
      }
}

export async function apiPost(cv) {
      let response = await fetch('http://localhost:3000/api/add', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(cv)
      });
      let data = await response.json();
      console.log(data);
      alert2.innerHTML = "Ditt inlägg är nu lagrat i databasen och går att se på startsidan.";
}

export async function apiDelete(id) {
      let response = await fetch(`http://localhost:3000/api/delete:${id}`, {
            method: 'DELETE',
            headers: {
                  'Content-Type': 'application/json'
            },
            //body: JSON.stringify(cv)
      });
      //let data = await response.json();
      alert2.innerHTML = `Inlägg ${id}är nu lagrat i databasen och går att se på startsidan.`;
}
