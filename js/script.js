document.getElementById('menuIcon').addEventListener('click', function() {
    var menuItems = document.getElementById('menuItems');
    if (menuItems.classList.contains('active')) {
        menuItems.classList.remove('active');
    } else {
        menuItems.classList.add('active');
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const headline = document.getElementById('headline');
    const text = headline.textContent;
    let index = 0;

    headline.textContent = '';

    function type() {
        if (index < text.length) {
            headline.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust this value if needed for different screen sizes
        }
    }

    type();
});

function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}


