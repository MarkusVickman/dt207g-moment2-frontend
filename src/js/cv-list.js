const cvDiv = document.getElementById("cv-div");

function writeCvToHtml(){

        //Laddar in från localstorage och sparar till arrayen med todos
        TodoList.loadFromLocalStorage();
        //Hämtar arrayen med todos
        let tempArray = apiGet();
        //Rensar html
        todoDiv.innerHTML = "";
        todoCompleted.innerHTML = "";
        //Om arrayen inte är tom byggs innehållet upp utifrån arrayen. 
        if (tempArray.length > 0) {
            for (let i = 0; i < tempArray.length; i++) {
                let box: string = "";
                let disabled: string = "";
                let newDiv: HTMLDivElement = document.createElement("div");
                let whichDiv: HTMLDivElement = todoDiv;
                //Om objektet är markerat som complete blir checkboxen ifylld, disabled och den appends till en annan div.
                if (tempArray[i].completed === true) {
                    box = "checked";
                    disabled = "disabled";
                    whichDiv = todoCompleted;
                }
                newDiv.classList.add(`priority${tempArray[i].priority}`);
                newDiv.innerHTML = `
                <p>${tempArray[i].task}</p>
                <p class="inline priority">Prioritet: ${tempArray[i].priority}</p>
                <label for="completed" class="inline">Färdig:</label>
                <input type="checkbox" class="inline box" ${disabled} ${box} id="${i}" name="completed">
                <button title="${i}" class="remove-todo">Ta bort</button>
                `;
                whichDiv.appendChild(newDiv);
            }
        };
     if(locals.rows.length> 0) { 
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
}