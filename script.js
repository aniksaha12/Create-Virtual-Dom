// Create an element
const container = document.createElement('div');
container.id = 'container';

//Set some attributes
container.setAttribute('class', 'main-container');

//Create a child elements
const heading = document.createElement('h1');
heading.textContent = 'Hello,  World!';

const paragraph = document.createElement('p');
paragraph.textContent = 'This is a simple dom example created with vanilla javascript';

const button = document.createElement('button');
button.textContent = 'click me';

// Create an input field
const inputField = document.createElement('input');
inputField.setAttribute('type','text');
inputField.setAttribute('placeholder', 'Type something');

// define an input event handler
inputField.addEventListener('input', function(){
    paragraph.textContent = 'You typed: ' + inputField.value;
})

// Define a click event handler
button.addEventListener('click', function(){
    alert('Thanks for click the button!')
});


// Append child elements to the container
container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(button);
container.appendChild(inputField);

// Append the container to body
document.body.appendChild(container);
