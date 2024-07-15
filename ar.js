function shopNow(url) {
    window.location.href = url;
}

function tryOnAR(url) {
    // Simple AR Try-On functionality implementation
    // Assuming we are using a modal to show AR functionality
    const arModal = document.getElementById('arModal');
    const arModalContent = document.getElementById('arModalContent');

    // Display the AR modal
    arModal.style.display = 'block';

    // Set the content of the AR modal to include the AR try-on iframe or content
    arModalContent.innerHTML = `
        <iframe src="${url}" width="100%" height="500px" frameborder="0"></iframe>
    `;
}

// Close the AR modal when the user clicks on <span> (x)
function closeModal() {
    const arModal = document.getElementById('arModal');
    arModal.style.display = 'none';
}

// Close the AR modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const arModal = document.getElementById('arModal');
    if (event.target == arModal) {
        arModal.style.display = 'none';
    }
}
