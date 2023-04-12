const input = document.querySelector('.text_area');
const saveBtn = document.querySelector('.save_goal');

const toDoList = document.querySelector('.to_do_list');
const listBack = document.querySelector('.list_back');
const errorMessage = document.querySelector('.error');
const greeteng = document.querySelector('.greeteng');

document.addEventListener("DOMContentLoaded", getToDo);
document.addEventListener("DOMContentLoaded", getTrashToDo);

saveBtn.addEventListener('click', () => {
    let blockList = `<div class="block_list">
                        <div class="text_block">
                            <input type="checkbox" name="" id="">
                            <span>${input.value}</span>    
                        </div>
                        <button class="delete_block">
                            <img src="delete.svg" alt="">
                        </button>
                    </div>`;

    if(input.value.length !== 0) {
        greeteng.classList.remove("show");
        listBack.insertAdjacentHTML("beforeend", blockList);
        saveToDo(input.value);
        input.value = "";
    }
    else {
        errorMessage.classList.add('show');
        setTimeout( () => {
            errorMessage.classList.remove('show');
        }, 2500);
    }
});

document.querySelector('input').addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        let blockList = `<div class="block_list">
                            <div class="text_block">
                                <input type="checkbox" name="" id="">
                                <span>${input.value}</span>    
                            </div>
                            <button class="delete_block">
                                <img src="delete.svg" alt="">
                            </button>
                        </div>`;

        if(input.value.length !== 0) {
            greeteng.classList.remove("show");
            listBack.insertAdjacentHTML("beforeend", blockList);
            saveToDo(input.value);
            input.value = "";
        }
        else {
            errorMessage.classList.add('show');
            setTimeout( () => {
                errorMessage.classList.remove('show');
            }, 2500);
        }
    }
});

const trash = document.querySelector('.trash');
const trashBack = document.querySelector('.trash_back');
const trashOpen = document.querySelector('.trash_open_back');
const trashClose = document.querySelector('.trash_close');
const trashList = document.querySelector('.trash_list');
const trashNoEmpty = document.querySelector('.no_empty');
const trashIsEmpty = document.querySelector('.its_empty');

trashOpen.addEventListener('click', () => {
    if(trashList.childElementCount > 0) {
        trash.classList.add('open');
        trashBack.classList.add('open');
    }
    else {
        trashIsEmpty.classList.add('show');
        setTimeout( () => {
            trashIsEmpty.classList.remove('show');
        }, 2500);
    }
});
trashClose.addEventListener('click', () => {
    trash.classList.remove('open');
    trashBack.classList.remove('open');
});
trashBack.addEventListener('click', () => {
    trash.classList.remove('open');
    trashBack.classList.remove('open');
});

toDoList.addEventListener('click', (e) => {
    if(e.composedPath()[1].className === 'delete_block') {
        trashList.insertAdjacentHTML("beforeend", `<div class="trash_block">
                                                    <div class="reload">
                                                        <img src="reload.svg" alt="">
                                                    </div>
                                                    <div class="block_list">
                                                        ${e.composedPath()[2].innerHTML}
                                                    </div>
                                                </div>`);

        saveTrashToDo(e.composedPath()[2].childNodes[1].childNodes[3].innerHTML);
        e.composedPath()[2].remove();
        removeToDo(e.composedPath()[2].childNodes[1].childNodes[3].innerHTML);

        if(localStorage.getItem("toDoItems").length == 2) greeteng.classList.add("show");
    }
    else if(e.composedPath()[0].className === 'remove_all_btn') {
        for(let i = 0; i < listBack.childElementCount; i++) {
            while(listBack.childElementCount != 0) {
                trashList.insertAdjacentHTML("beforeend", `<div class="trash_block">
                                                            <div class="reload">
                                                                <img src="reload.svg" alt="">
                                                            </div>
                                                            <div class="block_list">
                                                                ${listBack.childNodes[i].innerHTML}
                                                            </div>
                                                        </div>`);

                saveTrashToDo(listBack.childNodes[i].childNodes[1].childNodes[3].innerHTML);
                removeToDo(listBack.childNodes[i].childNodes[1].childNodes[3].innerHTML);
                listBack.childNodes[i].remove();
            }
        }
        greeteng.classList.add("show");
    }

    if(trashList.childElementCount > 0) trashNoEmpty.classList.add('show');
});

trash.addEventListener('click', (e) => {
    if(e.composedPath()[1].className === 'reload') {
        listBack.insertAdjacentHTML("beforeend", `<div class="block_list">
                                                    ${e.composedPath()[2].childNodes[3].innerHTML}
                                                </div>`);

                                                
        saveToDo(e.composedPath()[2].childNodes[3].childNodes[1].childNodes[3].innerHTML);
        removeTrashToDo(e.composedPath()[2].childNodes[3].childNodes[1].childNodes[3].innerHTML);
        e.composedPath()[2].remove();

        greeteng.classList.remove("show");
    }
    else if(e.composedPath()[1].className === 'delete_block') {
        removeTrashToDo(e.composedPath()[3].childNodes[3].childNodes[1].childNodes[3].innerHTML);
        e.composedPath()[3].remove();
    }
    else if(e.composedPath()[0].className == 'clear_all') {
        for(let i = 0; i < trashList.childElementCount; i++) {
            while(trashList.childElementCount != 0) {
                removeTrashToDo(trashList.childNodes[i].childNodes[3].childNodes[1].childNodes[3].innerHTML);
                trashList.childNodes[i].remove();
            }
        }
    }

    if(trashList.childElementCount < 1) trashNoEmpty.classList.remove('show');
});

function saveToDo(toDo) {
    let toDoItems;

    if(localStorage.getItem("toDoItems") === null) {
        toDoItems = []
    } else toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
    
    toDoItems.push(toDo);
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
}
function getToDo() {
    let toDoItems;

    if(localStorage.getItem("toDoItems") === null) {
        toDoItems = []
    } else toDoItems = JSON.parse(localStorage.getItem("toDoItems"));

    toDoItems.forEach(function(toDo) {
        let blockList = `<div class="block_list">
                        <div class="text_block">
                            <input type="checkbox" name="" id="">
                            <span>${toDo}</span>    
                        </div>
                        <button class="delete_block">
                            <img src="delete.svg" alt="">
                        </button>
                    </div>`;

        listBack.insertAdjacentHTML("beforeend", blockList);
    });
}
function removeToDo(toDo) {
    let toDoItems;

    if(localStorage.getItem("toDoItems") === null) {
        toDoItems = [];
    } else toDoItems = JSON.parse(localStorage.getItem("toDoItems"));

    toDoItems.splice(toDoItems.indexOf(toDo), 1);
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
}

function saveTrashToDo(toDo) {
    let toDoTrashItems;

    if(localStorage.getItem("toDoTrashItems") === null) {
        toDoTrashItems = []
    } else toDoTrashItems = JSON.parse(localStorage.getItem("toDoTrashItems"));
    
    toDoTrashItems.push(toDo);
    localStorage.setItem("toDoTrashItems", JSON.stringify(toDoTrashItems));
}
function getTrashToDo() {
    let toDoTrashItems;

    if(localStorage.getItem("toDoTrashItems") === null) {
        toDoTrashItems = []
    } else toDoTrashItems = JSON.parse(localStorage.getItem("toDoTrashItems"));

    toDoTrashItems.forEach(function(toDo) {
        trashList.insertAdjacentHTML("beforeend", 
            `<div class="trash_block">
                <div class="reload">
                    <img src="reload.svg" alt="">
                </div>
                <div class="block_list">
                    <div class="text_block">
                        <input type="checkbox" name="" id="">
                        <span>${toDo}</span>    
                    </div>
                    <button class="delete_block">
                        <img src="delete.svg" alt="">
                    </button>
                </div>
            </div>`
        );
    });
}
function removeTrashToDo(toDo) {
    let toDoTrashItems;

    if(localStorage.getItem("toDoTrashItems") === null) {
        toDoTrashItems = [];
    } else toDoTrashItems = JSON.parse(localStorage.getItem("toDoTrashItems"));

    toDoTrashItems.splice(toDoTrashItems.indexOf(toDo), 1);
    localStorage.setItem("toDoTrashItems", JSON.stringify(toDoTrashItems));
}

(localStorage.getItem("toDoTrashItems").length > 2) ? trashNoEmpty.classList.add('show') : trashNoEmpty.classList.remove('show');
(localStorage.getItem("toDoItems").length > 2) ? greeteng.classList.remove("show") : greeteng.classList.add("show");