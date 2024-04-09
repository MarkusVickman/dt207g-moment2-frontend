import { apiDelete } from "./api";

const cvDiv = document.getElementById("cv-div");

cvDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove-todo")){
        apiDelete(e.target.id);
    }

});