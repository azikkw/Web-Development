const input = document.querySelector('.text_area');
const saveBtn = document.querySelector('.save_goal');

const toDoList = document.querySelector('.to_do_list');
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
        toDoList.insertAdjacentHTML("beforeend", blockList);
        input.value = "";
    } 
    else {
        errorMessage.classList.add('show');
        setTimeout( () => { 
            errorMessage.classList.remove('show');
        }, 2500);
    }
});

toDoList.addEventListener('click', (e) => {
    if(e.composedPath()[1].className === 'delete_block') {
        e.composedPath()[2].remove();
    }
});

// var fs = require('fs');
// fs.writeFileSync()
