
import  './currency.js'
import './entry.js'

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mnu__links');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



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
    else{

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



