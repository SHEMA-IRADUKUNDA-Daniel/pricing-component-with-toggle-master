const button = document.querySelectorAll('.button');

const firstBox = document.querySelector('.first');

const secondBox = document.querySelector('.second');

const thirdBox = document.querySelector('.third');

const toggle = document.querySelector('.switch')

let isMonthly = true;
toggle.addEventListener('change', () =>{
    if(isMonthly) {
        isMonthly = false;
        firstBox.innerHTML ="&dollar;199.99"
        console.log('change');
        secondBox.innerHTML ='&dollar;224.99'
        thirdBox.innerHTML = '&dollar;399.99'
    }else{
        isMonthly = true;
        firstBox.innerHTML ="&dollar;19.99"
        console.log('change');
        secondBox.innerHTML ='&dollar;24.99'
        thirdBox.innerHTML = '&dollar;39.99'
    }

})
