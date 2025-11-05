/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [x] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle('dark-mode');
    // The toggle method is a way to add or remove a class from an element, 
    // without having to keep track of what the current state is. 
    // If the class is already present, it will be removed. 
    // If the class is not present, it will be added.
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [X] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [X] Project 7 (REQUIRED FEATURE)
  - [X] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const button = document.getElementById('rsvp-button');
// BUTTON, NOT THE FORM
// const form = document.getElementById('rsvp-form');

const addParticipant = (event, person) => {
    // Step 2: Write your code to manipulate the DOM here
    // let name = document.getElementById('name').value;
    // let email = document.getElementById('email').value;
    // let state = document.getElementById('state').value;
    // let theme = document.getElementById('theme').value;
    
    // print to console
    console.log(person.name + " " + person.email + " " + person.state + " " + person.theme);
    
    // create <p> element
    const p = document.createElement("p");

    // ` is backtick, (on same key as ~)
    p.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd for ${person.theme} theme`;

    // add it to the DOM (ex: inside a div)
    let participants = document.getElementsByClassName('rsvp-participants')[0];
    console.log(participants.textContent);
    // let: to add the new paragraph
    participants.appendChild(p);

    event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here
// button.addEventListener("rsvp-button", addParticipant()); // delete in project 7

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [X] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [X] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
  // if we have seen an error or not
  let containsErrors = false;
  //  holds a list of all the different inputs for our form
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  
  let person = {
    name: rsvpInputs[0].value, 
    email: rsvpInputs[1].value, 
    state: rsvpInputs[2].value, 
    theme: rsvpInputs[3].value
  };
  // TODO: Loop through all inputs
  for(let i = 0; i < rsvpInputs.length; i++) {
    // .value.length to check length
    // TODO: Inside loop, validate the value of each input
    // rsvpInputs[i].value.length
    if (person.name.length < 2){
      containsErrors = true;
      rsvpInputs[0].classList.add("error");
      // add an error class attribute to this current input
    }
    if (person.email.length < 2){
      containsErrors = true;
      rsvpInputs[1].classList.add("error");
      // add an error class attribute to this current input
    }
    if(person.state.length < 2){
      containsErrors = true;
      rsvpInputs[2].classList.add("error");
      // add an error class attribute to this current input
    } 
    if (person.theme.length < 2){
      containsErrors = true;
      rsvpInputs[3].classList.add("error");
      // add an error class attribute to this current input
    }
    if (!containsErrors) {
      rsvpInputs[i].classList.remove("error");
      /**
       * input.classList.remove("error")
        ➤ Safely removes only the "error" class without touching other classes.

        input.removeAttribute("class")
        ➤ Removes all class names from the class attribute — not just "error" — which may break your layout or styling.
       */
    }
  }
  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors == false){
    // no error, add participant
    addParticipant(event, person);
    toggleModal(person);
    for(let i = 0; i < rsvpInputs.length; i++){
      // set each value to empty
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
button.addEventListener("click", validateForm);


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [X] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal"); // TODO
    let modalContent = document.getElementById("modal-item");
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    modalContent.textContent = `Thank's for RSVPing, ${person.name}! We can't wait to hear you all have fun!`;

    // calls animateImage every half a second
    let intervalId = setInterval(animateImage, 500);
    // call clearInterval to stop the animation

    // Set modal timeout to 5 seconds
    // function called inside another function
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 5000);
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
const modalImage = document.getElementById("modal-img");
const animateImage = () => {
  if (rotateFactor == 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  // modalImage is const, but we can change its properties
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}