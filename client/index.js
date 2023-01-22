const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.toggle('show', entry.isIntersecting)
    }
    else {entry.target.classList.remove('show',entry.isIntersecting)}
    });
});



const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => observer.observe(el));

const buttons = document.querySelectorAll('.blink')

buttons.forEach(function (blink) {
    blink.addEventListener('click', function() {
        location.href = "/client/input.html"
    })
})