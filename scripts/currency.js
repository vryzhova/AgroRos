
let valute = {};
let usd = document.querySelector('.usd');
let euro = document.querySelector('.euro');
let cny = document.querySelector('.cny');
let exItem;
let inputValute;
let outputValute;
let result = 0;
let exchangeOutput = document.getElementById('exchange_output');


document.addEventListener('DOMContentLoaded', function(){
    getValuets();
    
})


function getValuets() {
    fetch('https://www.cbr-xml-daily.ru/archive/2020/06/02/daily_json.js').then(response => response.json()).then(data => {
        valute.usd = (data.Valute.USD.Value).toFixed(2);
        valute.euro = (data.Valute.EUR.Value).toFixed(2);
        valute.cny = (data.Valute.CNY.Value).toFixed(2);
        renderValute();
    })
}

function renderValute(){
    usd.innerHTML = `<span>${valute.usd} ₽</span> `
    euro.innerHTML = `<span>${valute.euro} ₽</span> `
    cny.innerHTML = `<span>${valute.cny} ₽</span> `
}

exchangeBtn.addEventListener('click', function(){
    exItem = document.getElementById('exchange_input').value;
    inputValute = document.getElementById('select_input-valute').value;
    outputValute = document.getElementById('select_output-valute').value;
    if(inputValute === 'RUB' && outputValute === 'USD'){
        result = (exItem/valute.usd).toFixed(2);
        exchangeOutput.innerHTML = result;
        
    } else if(inputValute === 'RUB' && outputValute === 'CNY'){
        result = (exItem/valute.cny).toFixed(2);
        exchangeOutput.innerHTML = result;

    }else if(inputValute === 'USD' && outputValute === 'RUB'){
        result = (exItem*valute.usd).toFixed(2);
        exchangeOutput.innerHTML = result;

    }else if(inputValute === 'RUB' && outputValute === 'EUR'){
        result = (exItem/valute.euro).toFixed(2);
        exchangeOutput.innerHTML = result;

    }else if(inputValute === 'EUR' && outputValute === 'RUB'){
        result = (exItem*valute.euro).toFixed(2);
        exchangeOutput.innerHTML = result;

    }else if(inputValute === 'CNY' && outputValute === 'RUB') {
        result = (exItem*valute.cny).toFixed(2);
        exchangeOutput.innerHTML = result;
    } else {
        alert('Ошибка в обмене валюты')
    }
})

