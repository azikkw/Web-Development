const input = document.querySelector('.text_area');
const saveBtn = document.querySelector('.save_goal');

const toDoList = document.querySelector('.to_do_list');
const listBack = document.querySelector('.list_back');
const errorMessage = document.querySelector('.error');
const greetengMessage = document.querySelector('.greeteng');

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
        listBack.insertAdjacentHTML("beforeend", blockList);
        input.value = "";
    } 
    else {
        errorMessage.classList.add('show');
        setTimeout( () => { 
            errorMessage.classList.remove('show');
        }, 2500);
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

        e.composedPath()[2].remove();
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

                listBack.childNodes[i].remove();
            }
        }
    }

    if(trashList.childElementCount > 0) {
        trashNoEmpty.classList.add('show');
    }
});

trash.addEventListener('click', (e) => {
    if(e.composedPath()[1].className === 'reload') {
        listBack.insertAdjacentHTML("beforeend", `<div class="block_list">
                                                    ${e.composedPath()[2].childNodes[3].innerHTML}
                                                </div>`);

        e.composedPath()[2].remove();
    }
    else if(e.composedPath()[1].className === 'delete_block') {
        e.composedPath()[3].remove();
    }
    else if(e.composedPath()[0].className == 'clear_all') {
        for(let i = 0; i < trashList.childElementCount; i++) {
            while(trashList.childElementCount != 0) {
                trashList.childNodes[i].remove();
            }
        }
    }

    if(trashList.childElementCount < 1) {
        trashNoEmpty.classList.remove('show');
    }
});
