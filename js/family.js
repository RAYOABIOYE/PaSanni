document.getElementById('menuIcon').addEventListener('click', function() {
    var menuItems = document.getElementById('menuItems');
    if (menuItems.classList.contains('active')) {
        menuItems.classList.remove('active');
    } else {
        menuItems.classList.add('active');
    }
});


function showModal(text) {
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
