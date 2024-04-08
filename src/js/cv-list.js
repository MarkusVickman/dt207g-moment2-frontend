const cvDiv = document.getElementById("cv-div");
import { apiGet } from './api.js';

writeCvToHtml();

function writeCvToHtml(){;

        //Hämtar arrayen med todos
        let cvArray = apiGet();

    console.log(cvArray)
        //Rensar html
        cvDiv.innerHTML = "";
        //Om arrayen inte är tom byggs innehållet upp utifrån arrayen. 
        if (cvArray.length > 0) {
            for (let i = 0; i < tempArray.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add(`cv-post`);
                newDiv.innerHTML = `
                <h3>${cvArray[i].COMPANY_NAME}</h3>
                <H4>${cvArray[i].JOB_TITLE}</H4>
                <p>${cvArray[i].LOCATION}</p>
                <p>${cvArray[i].DESCRIPTION}</p>
                <p class="inline">Anställd mellan: ${cvArray[i].START_DATE} och ${cvArray[i].END_DATE}</p>
                <button title="${cvArray[i].ID}" class="remove-todo">Ta bort</button>
                `;
                cvDiv.appendChild(newDiv);
            }
        }else{
            console.log("Funkionen för att skriva ut kördes");
        }
    };
    /* if(locals.rows.length> 0) { 
         locals.rows.forEach((row)=> { 
            <div>
            <h3>
                = row.COURSE_NAME 
            </h3>
            <ul>
                <li>
                    Kurskod: <%= row.COURSE_CODE %>
                </li>
                <li>
                    Kursname: <%= row.COURSE_NAME %>
                </li>
                <li>
                    Progression: <%= row.PROGRESSION %>
                </li>
                <li><a href=<%= row.SYLLABUS >
                        Länk till kursplan
                    </a>
                </li>
            </ul>
            <!--Knapp för att radera inlägg-->
            <button class="delete-button" onclick="window.location.href='/delete/= row.COURSE_ID';">Radera</button>
        </div>
             }); 
         } 
}*/