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
    historyDiv.innerHTML = "HISTORIAL";

    events.forEach((event) => {
        const p = document.createElement ("p");
        p.textContent = event;
        historyDiv.appendChild(p);
    });
    
}

