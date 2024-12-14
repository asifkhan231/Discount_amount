// script.js
const amount = document.querySelector('.amount')
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', (e) => {
        if (e.target.classList.contains('box-header')) {
            console.log(e.target.attributes.value.value)
            amount.innerHTML = e.target.attributes.value.value
        }
    });
});