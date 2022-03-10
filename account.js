var modal = document.getElementById('myModal');

var myBtn = document.getElementsByClassName('myBtn');
var close = document.getElementsByClassName('close')[0];
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "block";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 