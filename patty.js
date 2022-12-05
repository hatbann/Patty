const $ = (item) => document.querySelector(item);

const input = $('#patty_input');
const btn = $('#pattyBtn');
const patty = $('#pattyshake');
const person = $('#person');
let total = [];

const store = {
  setCenter: (center) => {
    localStorage.setItem('center', JSON.stringify(center));
  },
  getCenter: () => {
    return JSON.parse(localStorage.getItem('center'));
  },
};

$('#star').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.addClass('transparent');
  xBtn.removeClass('transparent');
  msg.removeClass('transparent');
});

$('#xBtn').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.removeClass('transparent');
  xBtn.addClass('transparent');
  msg.addClass('transparent');
})


function inputCheck() {
  if (input.value === '') {
    btn.setAttribute('disabled', true);
    btn.classList.remove('able');
    btn.classList.add('disable');
    btn.innerText = '당신의 패티는?';
  } else {
    btn.removeAttribute('disabled');
    btn.classList.remove('disable');
    btn.classList.add('able');
    btn.innerText = '확인';
  }
}

function clickBtn() {
  let content = input.value;
  patty.classList.add('stop');
  person.classList.add('stop');
  btn.innerText = '중심 잡기 성공';
  const newCenter = { center: content };

  if (store.getCenter() !== null) {
    total = store.getCenter();
  }
  total.push(newCenter);
  localStorage.setItem('center', JSON.stringify(total));
  setTimeout(goCongrat, 2000);
}

/* ------------------ 페이지 이동 함수들 -----------------*/
function goPatty1() {
  location.replace('./patty1.html');
}

function goPatty2() {
  location.replace('./patty2.html');
}

function goPatty3() {
  location.replace('./patty3.html');
}

function goPatty4() {
  location.replace('./patty4.html');
}

function goCongrat() {
  location.replace('./Congratulation.html');
}
/* --------------------------------*/

function goIntro() {
  location.replace('./pattyIntro.html');
}
