let modal = document.getElementById("entryPopup");

// Get the button that opens the modal
let btn = document.getElementById("entryOpenPopup");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    let name = document.getElementById('fullName').value;
    let tel = document.getElementById('phone').value;
    let outputName = document.getElementById('outputName');
    outputName.textContent = name
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
