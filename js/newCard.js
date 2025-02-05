
//================== CARD - CREATE - DELETE ======================


//evento que cria o card
const addNewCard = document.getElementById("addNewCard");
addNewCard.addEventListener('click', ()=>{
    addNewTask();
    switchModal();
})

//criar novo card
const addNewTask = () =>{
    let input = document.getElementById('userInput');
    let textInput = input.value.trim();

    //validação do input
    if(textInput === ""){
        alert("Digite uma tarefa!");
        return
    }

    //Cria o elemento(DIV) 
    let task = document.createElement("div");
    task.className = "card";
    task.setAttribute("draggable","true");
    task.textContent = textInput;
    task.id=`card-${Date.now()}`;


    //criar span dentro da div
    let spanElement = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    spanElement.className = "close";
    spanElement.appendChild(span_txt);
 

    task.appendChild(spanElement);
    document.querySelector(".dropZone").appendChild(task);

    input.value= "";

    //remover card
    removeTask();
};

//Remover tarefa
const removeTask = ()=>{
    const closeTaskBt = document.querySelectorAll(".close")
    closeTaskBt.forEach(closeBt => {
        closeBt.addEventListener("click", ()=>{
            const parentRemove = closeBt.closest(".card");
            if(parentRemove){
                parentRemove.remove();
            }
        })
    })

    
}


//================== MODAL ======================

//Alternar display do modal 
const switchModal =() =>{
    const modal =document.querySelector(".modal");
    const displayModal = modal.style.display
    if(displayModal == "block"){
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
};

//Abrir modal 
const newCardbt= document.querySelector(".newCard");
newCardbt.addEventListener('click',switchModal);

//fechar modal
const closeModalBt = document.querySelector('.closeModalBt');
closeModalBt.addEventListener('click', switchModal);





 
