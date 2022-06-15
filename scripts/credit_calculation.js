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

class SliderCredit 
{
    constructor (rangeElement, valueElement, options) 
    {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;
      // Attach a listener to "change" event
    this.rangeElement.addEventListener('input', this.updateSliderCredit.bind(this))
    }

    // Initialize the slider
    init(options) 
    {
    this.rangeElement.setAttribute('min', options.min)
    this.rangeElement.setAttribute('max', options.max)
    this.rangeElement.value = options.cur
    this.updateSliderCredit()
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
    

    updateSliderCredit (newValue) 
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
console.log(optionskreditsum);

if (rangeElementkreditsum) 
{
    let sliderCredit = new SliderCredit(rangeElementkreditsum, valueElementkreditsum, optionskreditsum)
    sliderCredit.init(optionskreditsum);   
};


// расчет кредита срок кредита

let rangeElementkreditperiod = document.querySelector('.range.kredit.period [type="range"]');

let valueElementkreditperiod  = document.querySelector('.range .range__value.kredit.period span') ;

let optionskreditperiod  = 
{
    min: 1,
    max: 5,
    cur: 3
};

if (rangeElementkreditperiod ) 
{
    let sliderCredit = new SliderCredit(rangeElementkreditperiod, valueElementkreditperiod, optionskreditperiod)
    sliderCredit.init(optionskreditperiod);
}

document.getElementById('rangeKreditPayment').innerHTML = new Intl.NumberFormat('ru-RU').format(31967.55);

// если меняется сумма

rangeKreditSum.oninput = function () 
{
    let rangeKreditSum = Number(document.getElementById('rangeKreditSum').value);

    let rangeKreditPeriod = Number(document.getElementById('rangeKreditPeriod').value); // срок кредита в годах

    let rangeKreditPeriodMonth = Number(rangeKreditPeriod*12); // срок кредита в мес
    
    let rangeKreditRateMonth;

    let rangeKreditPayment = 0;  // платеж ежемесячный аннуитетный

    let rangeKreditRate = document.getElementById('rangeKreditRate').innerHTML;  // годовая процентная ставка

    if (Number(rangeKreditSum) <= 1000000) 
        {
            document.getElementById('rangeKreditRate').innerHTML = '9.4%';
            rangeKreditRateMonth = Number(9.4/ 100 / 12).toFixed(4); // месячная проц ставка        
        }
        else 
        {
            if (Number(rangeKreditSum) <= 3000000)
                {
                    document.getElementById('rangeKreditRate').innerHTML = '9.8%';
                    rangeKreditRateMonth = Number(9.8 / 100 / 12).toFixed(4); // месячная проц ставка            
                }
            else
                {
                    document.getElementById('rangeKreditRate').innerHTML = '10.2%'
                    rangeKreditRateMonth = Number(10.2 / 100 / 12).toFixed(4); // месячная проц ставка
                }
        }

    rangeKreditPayment = Number(Number(rangeKreditSum)*((Number(rangeKreditRateMonth)*Number((Number(rangeKreditRateMonth)+1))**(Number(rangeKreditPeriodMonth)))/((Number(rangeKreditRateMonth)+1)**(Number(rangeKreditPeriodMonth))-1))).toFixed(2)

    document.getElementById('rangeKreditPayment').innerHTML = new Intl.NumberFormat('ru-RU').format(rangeKreditPayment);
}

// если меняется срок

rangeKreditPeriod.oninput = function () 
{
    let rangeKreditSum = Number(document.getElementById('rangeKreditSum').value);

    let rangeKreditPeriod = Number(document.getElementById('rangeKreditPeriod').value); // срок кредита в годах

    let rangeKreditPeriodMonth = Number(rangeKreditPeriod*12); // срок кредита в мес
    
    let rangeKreditRateMonth;

    let rangeKreditPayment = 0;  // платеж ежемесячный аннуитетный

  //  let rangeKreditRate = document.getElementById('rangeKreditRate').innerHTML;  // годовая процентная ставка

    if (Number(rangeKreditSum) <= 1000000) 
        {
            document.getElementById('rangeKreditRate').innerHTML = '9.4%';

            rangeKreditRateMonth = Number(9.4/ 100 / 12).toFixed(4); // месячная проц ставка        
        }
        else 
        {
            if (Number(rangeKreditSum) <= 3000000)
                {
                    document.getElementById('rangeKreditRate').innerHTML = '9.8%';

                    rangeKreditRateMonth = Number(9.8 / 100 / 12).toFixed(4); // месячная проц ставка            
                }
            else
                {
                    document.getElementById('rangeKreditRate').innerHTML = '10.2%';

                    rangeKreditRateMonth = Number(10.2 / 100 / 12).toFixed(4); // месячная проц ставка
                }
        }

    rangeKreditPayment = Number(Number(rangeKreditSum)*((Number(rangeKreditRateMonth)*Number((Number(rangeKreditRateMonth)+1))**(Number(rangeKreditPeriodMonth)))/((Number(rangeKreditRateMonth)+1)**(Number(rangeKreditPeriodMonth))-1))).toFixed(2)

    document.getElementById('rangeKreditPayment').innerHTML = new Intl.NumberFormat('ru-RU').format(rangeKreditPayment);
}






//расчет ипотеки сумма ипотеки


//расчет ипотеки срок ипотеки


//расчет страховки сумма страховки


//расчет страховки срок страховки