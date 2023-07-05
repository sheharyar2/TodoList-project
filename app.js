const addForm=document.querySelector('.add');
//console.log(addForm.add.value);
const list=document.querySelector('.todos');
//const del=document.querySelector('.delete');

const search=document.querySelector('.search input');


const generateTemplate = todo =>
{
   const html=  ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
</li>`

list.innerHTML += html;
}
addForm.addEventListener('submit', e =>
{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    //console.log(todo);
    if(todo.length)
    {
        generateTemplate(todo);
        addForm.reset();
    }
});

//deleting todos

list.addEventListener('click',e=>
    {
        if(e.target.classList.contains('delete'))
        {
            e.target.parentElement.remove();
        }
    });

//Searching TODOSc

const filtertodos = (term) =>
{   
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
   .forEach((todo)=>todo.classList.add('filtered'));

   Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))
   .forEach((todo)=>todo.classList.remove('filtered'));

    //console.log(term);
}
search.addEventListener('keyup' , ()=>
{
    const term=search.value.trim().toLowerCase();
    filtertodos(term);
})


