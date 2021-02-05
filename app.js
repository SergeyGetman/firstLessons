const btns = document.querySelectorAll('button');
let wrapper = document.querySelector(".btn-blcok");
console.log(wrapper);
// console.log(btns[0].classList.length);
// console.log(btns[1].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains("red")) {
//     console.log('red');ё 
// }


// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove("red");
//     }
// });

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle("red");
    btns[3].classList.add("black");
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.yellow')) {
        console.log("Hello");
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log("Hello");
//     });
// });

const btn = document.createElement('button');
btn.innerText = "23";
btn.classList.add('yellow');
wrapper.append(btn);