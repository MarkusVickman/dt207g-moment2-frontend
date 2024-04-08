const form = document.getElementById("form");
const alert = document.getElementById("alert");
const alert2 = document.getElementById("alert2");
import { apiPost } from './api.js';

// Lägg till händelselyssnare på formuläret
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Hämta CV-data från formuläret
    const companyName = document.getElementById("company_name").value;
    const jobTitle = document.getElementById("job_title").value;
    const location = document.getElementById("location").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const description = document.getElementById("description").value;

    //Letar fel i formuläret med errorCheck funktionen. Utan fel så skapas ett object som skickas till funktionen för POST-anrop
    if(errorCheck(companyName, jobTitle, location, startDate, endDate, description)){
        alert.innerHTML = "";
        const cv = {companyName:companyName, jobTitle:jobTitle, location:location, startDate:startDate, endDate:endDate, description:description};
        apiPost(cv);
    }
});

//Checkar efter fel i formuläret och skriver ut felmeddelande i så fall annars returnerar true
function errorCheck(companyName, jobTitle, location, startDate, endDate, description){
    let inputErrors = [];
    //Flera if satser för att välja vilka felmeddelanden som ska tar med
    if (companyName === "") {
        inputErrors.push("företagsnamn ");
    }
    if (jobTitle === "") {
        inputErrors.push("jobbtitel ");
    }
    if (location === "") {
        inputErrors.push("ort ");
    }
    if (startDate === "") {
        inputErrors.push("startdatum ");
    }
    if (endDate === "") {
        inputErrors.push("slutdatum ");
    }
    if (description === "") {
        inputErrors.push("beskrivning!");
    }

    //Om fel inte finns skapas en nytt inlägg i databasen och startsidan laddas
    if (inputErrors.length === 0) {
        return true;
    } 
    //Om fel finns skrivs alla dessa ut på sidan
    else{
        alert.innerHTML = "Fyll i " + inputErrors;
        return false;
    }
}
