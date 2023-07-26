var elTitle = document.querySelector('.title')
var elText = document.querySelector('.text')
var elInp = document.querySelector('.inp')
var elBtn = document.querySelector('.btn')

function fn() {
    if(elInp.value > 9250000){
        elTitle.textContent = 'Alisher bliet olaver'
        elInp.value =''
    }else if(elInp.value < 9250000){
        elTitle.textContent = 'Alisher damini olaver '
        elInp.value =''
    }
    else {
        elTitle.textContent = 'faqat raqam kirit Alisher'
        elInp.value =''
    }
}