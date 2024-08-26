const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function createNote() {
    let inputBox = document.createElement("p");
    let image = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    image.src = "https://w7.pngwing.com/pngs/271/838/png-transparent-computer-icons-delete-icon-white-text-logo.png";
    notesContainer.appendChild(inputBox).appendChild(image);
}

createBtn.addEventListener("click", createNote);

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});