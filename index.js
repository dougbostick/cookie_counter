console.log('cookies')

let count = document.getElementById('count');
let cookie = document.getElementById('cookieIMG')

cookie.addEventListener('click', () => {
    // let cur = count.innerHTML * 1;
    let cur = Number(count.innerHTML); // '2' not  1
    cur += 1; // 1 += 1;
    count.innerHTML = cur;
})

let reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    count.innerHTML = 0;
})
 
