// Get the elements
const noteTitleInput = document.getElementById('noteTitle');
const noteContentInput = document.getElementById('noteContent');
const submitButton = document.getElementById('submitButton');
const notesContainer = document.querySelector('.notesContainer');

// Function to save a note
const saveNote = () => {
    const title = noteTitleInput.value;
    const content = noteContentInput.value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Kérlek töltsd ki a Cím és a Paragrafus tartalmakat.');
        return;
    }

    const noteElement = document.createElement('div');
    noteElement.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    notesContainer.appendChild(noteElement);

    // Clear input fields after saving
    noteTitleInput.value = '';
    noteContentInput.value = '';
};

// Attach event listener to the submit button
submitButton.addEventListener('click', saveNote);