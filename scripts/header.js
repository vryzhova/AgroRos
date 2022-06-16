
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
 
// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#mnu__links").cloneNode(1);
 
// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);
 
// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
 
// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}
 
// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);
 
// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
 
// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

localStorage.clear(); //для проверки подтягивания города

document.addEventListener("DOMContentLoaded", function(event) {
    let data = localStorage.getItem("city");
    console.log(data);

    if(data) { // если в сторадже что-то есть
        document.getElementById("city").innerText = data;
    } 
    else {
    // присвоим дефолтное значение и сохраним
    save(data = {});
}});

//сохранение в localStorage города
function save() {
    const errorCallback = (error) => {
    console.error(error);
    };

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
    }
}

function succesCallback(position){
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cc019d61a64841b8b35813726e1693b2`)
    .then(response => response.json())
    .then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        //let {city} = allDetails; 
        let city = allDetails.city;
        document.getElementById("city").innerText = `${city}`;
        localStorage.setItem('city', `${city}`);
    })
    .catch(error => console.log(error));
}