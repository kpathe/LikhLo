console.log("Welcome to LikhLo Notes");

// Get the button element and the input field
let noteTitleButton = document.getElementById("note-title-button");
let noteTitleInput = document.getElementById("note-title-input");

let noteTitleText = document.getElementById("note-title-text");

let noteDetails = document.getElementById("note-details");

let addNoteButton = document.getElementById("add-note");
let noteData = document.getElementById("note-data");

let firstNote = document.getElementById("first-note");

// Add an event listener to the button
noteTitleButton.addEventListener("click", function (e) {
  // Prevent the form from submitting
  e.preventDefault();

  // console.log(e.target);
  // console.log("Button was clicked");

  // Get the value from the input field
  let titleData = noteTitleInput.value;

  // Log the value
  console.log(titleData);
  noteTitleText.innerText = titleData;

  let now = new Date();
  let timeString = now.toLocaleTimeString();
  let dateString = now.toLocaleDateString();
  console.log(dateString);
  console.log(timeString);

  noteDetails.innerText = `Last Edited ${dateString} ${timeString}`;
});

addNoteButton.addEventListener("click", function (e) {
  // Prevent the form from submitting
  e.preventDefault();

  let noteText = noteData.value;

  firstNote.innerText = noteText;
});
