//fil för att skriva ut från servern/databasen till webplatsens startsida
//din där cv-data ska skrivas ut
const cvDiv = document.getElementById("cv-div");
import { apiGet } from './api.js';

//När sidan laddas 
window.onload = writeCvToHtml();

//Initieras vis start och efter att ett inlägg tagits bort från webbplatsen
export async function writeCvToHtml() {
    // Anropa funktionen för att hämta data och väntar på svar
    let cvArray = await apiGet();

    //Rensar html
    cvDiv.innerHTML = "";

        //Om arrayen inte är tom byggs innehållet upp utifrån arrayen. 
        if (cvArray.length > 0) {
            for (let i = 0; i < cvArray.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add(`cv-post`);
                newDiv.innerHTML = `
                <h3>${cvArray[i].COMPANY_NAME}</h3>
                <H4><bold>Arbetstitel:</strong> ${cvArray[i].JOB_TITLE}</H4>
                <p><strong>Ort:</strong> ${cvArray[i].LOCATION}</p>
                <p><strong>Beskrivning:</strong>  ${cvArray[i].DESCRIPTION}</p>
                <p>Anställd: ${cvArray[i].START_DATE.slice(0, 10)} - ${cvArray[i].END_DATE.slice(0, 10)}</p>
                <button id="${cvArray[i].ID}" class="remove-cv">Ta bort</button>
                `;
                cvDiv.appendChild(newDiv);
            }
        } else {

        }
};