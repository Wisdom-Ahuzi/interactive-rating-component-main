const items = document.querySelectorAll('span');
const sumit = document.querySelector('.button');
const first = document.querySelector('.card-div');
const second = document.querySelector('.submitted-card');
const option = document.querySelector('.option-display');

items.forEach((item, index) =>  {
    item.addEventListener('click', e => {
    items.forEach((item,i) => {
        if(i !== index){
            item.classList.remove("active")
        }
    });
    if(item.classList.contains("active")){
        item.classList.remove("active")
        option.textContent = `No choice was made`;
        sumit.classList.toggle('yoo');
        sumit.classList.toggle('sup');
    }else {
        item.classList.add("active")
        option.textContent = `You suggested ${e.target.innerText} out of 5`
        sumit.classList.add('yoo');         
        sumit.classList.add('sup');
    }
});});
sumit.addEventListener('click', (e) => {
    first.classList.add('invincible');
    second.style.display = 'flex';
});


