console.log('cookies')

let count = document.getElementById('count');
let cookie = document.getElementById('cookieIMG')

let cur = 0;

cookie.addEventListener('click', () => {
    // // let cur = count.innerHTML * 1;
    // let cur = Number(count.innerHTML); // '2' not  1
    // cur += 1; // 1 += 1;
    // count.innerHTML = cur;
    cur++;
    count.innerHTML = cur;
})

let reset = document.getElementById('reset');

let cookieh1 = document.getElementById('cookieh1');

let curFont = 38;

reset.addEventListener('click', () => {
    count.innerHTML = 0;
    cur = 0;
})

let font = document.getElementById('font');

font.addEventListener('click', () => {
    curFont += 2;
    cookieh1.style.fontSize = `${curFont}px`;
})

let resetFont = document.getElementById('resetFont');

resetFont.addEventListener('click', () => {
    cookieh1.style.fontSize = '38px';
    curFont = 38;
})
 
