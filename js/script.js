const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minutNum = document.querySelector('.minutes');

// new Date() - Global Object komputerdagi vaqtni olib beradi
// getSeconds() - Secundni olib beradi
// getMinutes() - minutni olib beradi
// getHours() - soatni olib beradi

// console.log(new Date().getHours());

function clock() {
    let time = new Date(),
        second = time.getSeconds(),
        minut = time.getMinutes(),
        hours = time.getHours()

    sec.style.transform = `rotate(${second * 6}deg)`
    min.style.transform = `rotate(${minut * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    setTimeout(() => clock(), 1000);

    minutNum.innerHTML = minut < 10 ? '0' + minut : minut
    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
}
clock()

const tabs = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active')
            content[j].classList.remove('active')
        }
        tabs[i].classList.add('active')
        content[i].classList.add('active')
    })
}

const hone = document.querySelector(".stopwatch__hours");
const mine = document.querySelector(".stopwatch__minutes");
const secund = document.querySelector(".stopwatch__seconds");

let stopwatchBtn = document.querySelector(".stopwatch__btn");

let clearWatch;
stopwatchBtn.addEventListener("click", function () {
  if ((stopwatchBtn.innerHTML = "start")) {
    stopwatchBtn.innerHTML = "stop";
    startWatch();
    
  }

  // else if(stopwatchBtn.innerHTML == "stop"){
  //     stopwatchBtn.innerHTML == "clear"
  // }
});

const start = document.querySelector('selector');

function startWatch() {

    secund.innerHTML++

  if (secund.innerHTML > 59) {
    secund.innerHTML = 0
    mine.innerHTML++
  }
  if (mine.innerHTML > 59) {
    mine.innerHTML = 0 
    hone.innerHTML++
  }
  clearWatch = setTimeout(() => {
    startWatch();
  }, 100);
}