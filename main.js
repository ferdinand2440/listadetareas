const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const events = [];
const historyDiv = document.querySelector("#historial");


addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;
    
    if(text !== ""){
       
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());
        events.push(text);
        displayHistory();
        

        input.value = "";
        empty.style.display = "none";

    }


})

function addDeleteBtn (){
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0){
            empty.style.display = "block";
        }
    });

    return deleteBtn;

}


function displayHistory() {
    historyDiv.innerHTML = "<span style='color: dark; font-weight: bold; font-size: 20px;'>HISTORIAL</span>";

    const lastFiveEvents = events.slice(-5); // get the last five events in the array

    lastFiveEvents.forEach((event) => {
        const p = document.createElement("p");
        p.textContent = event;
        historyDiv.appendChild(p);
    });

    const viewAllBtn = document.createElement("button"); // create a view all button
    viewAllBtn.textContent = "Ver todo";
    viewAllBtn.className = "btn-view-all";

    viewAllBtn.addEventListener("click", (e) => {
        historyDiv.innerHTML = "<span style='color: dark; font-weight: bold; font-size: 20px;'>HISTORIAL (todas)</span>";


        events.forEach((event) => {
            const p = document.createElement("p");
            p.textContent = event;
            historyDiv.appendChild(p);
        });
        historyDiv.appendChild(closeBtn); // add a close button to the history list
    });

    const closeBtn = document.createElement("button"); // create a close button
    closeBtn.textContent = "Cerrar";
    closeBtn.className = "btn-close";

    closeBtn.addEventListener("click", (e) => {
        historyDiv.innerHTML = "<span style='color: dark; font-weight: bold; font-size: 20px;'>HISTORIAL (últimas 5 tareas)</span>";
        
        lastFiveEvents.forEach((event) => {
            const p = document.createElement("p");
            p.textContent = event;
            historyDiv.appendChild(p);
        });
        historyDiv.appendChild(viewAllBtn); // add a view all button to the history list
    });

    historyDiv.appendChild(viewAllBtn); // add the view all button to the history list
}







