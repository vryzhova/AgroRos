import  './currency.js';

const errorCallback = (error) => {
    console.error(error);
};

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
}
else{

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
    })
    .catch(error => console.log(error));
    
}



