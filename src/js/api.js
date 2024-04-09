//Fil med fetch-anrop

//Läser in variabel med ett element där meddelanden ska visas
const alert2 = document.getElementById("alert2");

//Get fetch-anrop för att hämta array med cv
export async function apiGet() {
      const url = 'http://localhost:3000/api/cv';
      try {
            const response = await fetch(url);
            const result = await response.json();
            //returnerar json-data till funktionen writeCvToHtml()
            return result;
      } catch (error) {
            console.error(error);
      }
}

//Post fetch-anrop som tar in ett objekt som parameter
export async function apiPost(cv) {
      let response = await fetch('http://localhost:3000/api/add', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(cv)
      });
      let data = await response.json();
      //När det är klart skrivs ett meddelande ut på skärmen att inlägget är sparat
      alert2.innerHTML = "Ditt inlägg är nu lagrat i databasen och går att se på startsidan.";
}

//Delete fetch-anrop som tar in ett id/index som skickas med till servern för att tas bort från databasen 
export async function apiDelete(id) {
      let response = await fetch(`http://localhost:3000/api/delete/${id}`, {
            method: 'DELETE',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify()
      });
      //Väntar på data och först när den finns görs en retur till funktionen removeCV(id) där den väntar på svar
      let data = await response.json(); 
      return data;
}
