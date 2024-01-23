// Select the Some Required fields

//target the form , which handle the user input with adding button.
const Todoform = document.querySelector('.todoform');
//target the User's Inputed Data
const userInput = document.getElementById('userInput');
// target the Adding Button
const addbtn = document.getElementById('add-item');
// target the list Items Container
const listContainer = document.querySelector('.itembox');



//Create a Event , which is capable for submitt/Adding the User Input-Data into the list Container.
Todoform.addEventListener('submit', (e) => {
    // the preventDefault function prevent the forms primary state , which is submitted the form before checking any condition.
    e.preventDefault();

    // here check the consition , User enter something or not yet.
    if (userInput.value == "") {
        // if not enter any data item ,then show a alert message.
        alert("SORRY! ,Please Fill Something First...");
    }
    // othewise , adding the User Input in the list Items container.
    else {

        // here we can create a dynamic html code , which is load after passing the Condition.
        const newitem = document.createElement('ul');
        newitem.innerHTML = `<div class="item">
        <input type="text" value="${userInput.value}" readonly>
        <div class="btns">
        <button type="submit" class="DONE"><i class="fa-solid fa-circle-check"></i></button>
        <button type="submit" class="REMOVE"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>`;
        listContainer.appendChild(newitem);

        // here we can reset the Input value , for adding new list item. 
        userInput.value = "";
    }
});

// Here we can create a another Event , which is capable for manipulating the list items, like Mark-Done,Remove etc. 

listContainer.addEventListener('click', (e) => {
    // here we control the default click event.
    e.preventDefault();

    // here we create a conditional events on the elements.

    if (e.target.classList.contains("fa-circle-check")) {
        const Textchecked = e.target.parentNode.parentNode.parentNode.firstElementChild;
        Textchecked.style.textDecoration = "line-through";
        Textchecked.style.color = "red";
        Textchecked.style.fontWeight = "lighter";
        const donebtnRemove = e.target.parentNode.parentNode.firstElementChild;
        donebtnRemove.remove();
    }
    else if (e.target.classList.contains("fa-trash")) {
        const listitemRemove = e.target.parentNode.parentNode.parentNode;
        listitemRemove.remove();
    }
});
