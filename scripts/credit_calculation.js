var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') 
    {
        for (var i=0; i<tab.length; i++) 
        {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


// ползунок

class Slider 
{
    constructor (rangeElement, valueElement, options) 
    {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;
      // Attach a listener to "change" event
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }

    // Initialize the slider
    init(options) 
    {
    this.rangeElement.setAttribute('min', options.min)
    this.rangeElement.setAttribute('max', options.max)
    this.rangeElement.value = options.cur
    this.updateSlider()
    }

    // Format the money
    asMoney(value) 
    {
    return parseFloat(value).toLocaleString('rur', { maximumFractionDigits: 2 })
    }

    generateBackground(rangeElement) 
    {   
    if (this.rangeElement.value === this.options.min) {
        return
    }

    let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100;

    return 'background: linear-gradient(to right, #4E8A6B, #4E8A6B ' + percentage + '%, rgba(78, 138, 107, 0.5) ' + percentage + '%, rgba(78, 138, 107, 0.5) 100%)'
    }
    

    updateSlider (newValue) 
    {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
    this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
    
    
}

// расчет кредита сумма кредита 

let rangeElementkreditsum = document.querySelector('.range.kredit.sum [type="range"]');
console.log(rangeElementkreditsum)
let valueElementkreditsum = document.querySelector('.range .range__value.kredit.sum span') ;
console.log(valueElementkreditsum)

let optionskreditsum = 
{
    min: 100000,
    max: 5000000,
    cur: 1000000
};
console.log(optionskreditsum)

if (rangeElementkreditsum) 
{
    let slider = new Slider(rangeElementkreditsum, valueElementkreditsum, optionskreditsum)
    slider.init(optionskreditsum)
}


// расчет кредита срок кредита

let rangeElementkreditperiod = document.querySelector('.range.kredit.period [type="range"]');
console.log(rangeElementkreditperiod )

let valueElementkreditperiod  = document.querySelector('.range .range__value.kredit.period span') ;
console.log(valueElementkreditperiod )

let optionskreditperiod  = 
{
    min: 1,
    max: 5,
    cur: 3
};
console.log(optionskreditperiod )

if (rangeElementkreditperiod ) 
{
    let slider = new Slider(rangeElementkreditperiod, valueElementkreditperiod, optionskreditperiod)
    slider.init(optionskreditperiod);

    cvalueElementkreditperiod;
}





//расчет ипотеки сумма ипотеки


//расчет ипотеки срок ипотеки


//расчет страховки сумма страховки


//расчет страховки срок страховки