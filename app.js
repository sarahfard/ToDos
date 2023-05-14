const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


// functions
const generateTemplate = todo => {
    const newTask = `
        <li class="list-group-item my-1 d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <div>
                <i class="fa-solid fa-check mx-2 check" style="color: #61d006;"></i>
                <i class="fa-solid fa-xmark delete" style="color: #df3826;"></i>
            </div>
        </li>
    `;
    list.innerHTML += newTask;
};


const filterTasks = term => {
    Array.from(list.children)
        .filter((task) => { 
            return !task.textContent.toLowerCase().includes(term);
        })
        .forEach((task) => {
            task.classList.add('filtered');
        })

    Array.from(list.children)
        .filter((task) => { 
            return task.textContent.toLowerCase().includes(term);
        })
        .forEach((task) => {
            task.classList.remove('filtered');
        })
    // Array.from(list.children)
    //     .filter(task => !task.textContent.toLocaleLowerCase().includes(term))
    //     .forEach(task => task.classList.add('filtered'));

    //     Array.from(list.children)
    //     .filter(task => task.textContent.toLocaleLowerCase().includes(term))
    //     .forEach(task => task.classList.remove('filtered'));
    
};



//add tasks
addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim(); //get the keyboard input and trim by space
    
    if(todo.length){ //check for an actual value
        generateTemplate(todo);
        addForm.reset(); //clear the form
    }
});

//edit tasks
list.addEventListener('click', e => {
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    } else if(e.target.classList.contains('check')){
        e.target.parentElement.previousElementSibling.classList.add('text-decoration-line-through');
    }
});


//search
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTasks(term);
});
