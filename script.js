
const spans = document.querySelectorAll('.progress-bar-div span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});

document.getElementById('menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar ul').classList.toggle('show');
});
