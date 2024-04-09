const cvDiv = document.getElementById("cv-div");
import { apiGet } from './api.js';

writeCvToHtml();

async function writeCvToHtml() {

    //Hämtar arrayen med todos
    // Anropa funktionen
    let cvArray = await apiGet();

    console.log(cvArray);
    //Rensar html
    cvDiv.innerHTML = "";
    //Om arrayen inte är tom byggs innehållet upp utifrån arrayen. 
    if (cvArray.length > 0) {
        for (let i = 0; i < cvArray.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add(`cv-post`);
            newDiv.innerHTML = `
                <h3>${cvArray[i].COMPANY_NAME}</h3>
                <H4>${cvArray[i].JOB_TITLE}</H4>
                <p>${cvArray[i].LOCATION}</p>
                <p>${cvArray[i].DESCRIPTION}</p>
                <p class="inline">Anställd mellan: ${cvArray[i].START_DATE} och ${cvArray[i].END_DATE}</p>
                <button id="${cvArray[i].ID}" class="remove-todo">Ta bort</button>
                `;
            cvDiv.appendChild(newDiv);
        }
    } else {
        console.log("Funkionen för att skriva ut kördes");
    }
};