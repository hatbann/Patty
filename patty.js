const $ = (item) => document.querySelector(item);

const input = $('#patty_input');
const btn = $('#pattyBtn');
const patty = $('#patty');
const person = $('#person');
const peopelCenter = $('#peoplecenter');

let total = [];


const store = {
  setCenter : (center) => {
    localStorage.setItem('center', JSON.stringify(center));
  },
  getCenter : ()=>{
    return JSON.parse(localStorage.getItem('center'));
  }
}


input.oninput = function () {
  if (input.value === '') {
    btn.setAttribute('disabled', true);
    btn.classList.remove('able');
    btn.classList.add('disable');
    btn.innerText = '당신의 패티는?'
  } else {
    btn.removeAttribute('disabled');
    btn.classList.remove('disable');
    btn.classList.add('able');
    btn.innerText = '확인'
  }
};

function clickBtn() {
  let content = input.value;
  patty.classList.add('stop');
  person.classList.add('stop');
  btn.innerText = '중심 잡기 성공';
  const newCenter = {center : content};

  if(store.getCenter() !== null){
    total = store.getCenter();
  }
  total.push(newCenter);
  localStorage.setItem('center', JSON.stringify(total));
  setTimeout(goLastPage,2000);
}

function enterPage(){
  location.replace('./patty.html');
}

function goLastPage(){
  location.replace('./Congratulation.html');
}

function goIntro(){
  location.replace('./pattyIntro.html');
}

function printTotal(){
  if(store.getCenter() !== null){
    total = store.getCenter();
    console.log(totalArr);
    for(let i = 0; i<totalArr.length; i++){

    }
  }
}

printTotal();