const button = document.getElementById('btn');  
button.addEventListener('click', () => {
   button.innerHTML = +button.innerHTML + 1;
}); 