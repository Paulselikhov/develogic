
title = document.title;
document.title = 'Главная';

let data = document.title;

const bc = new BroadcastChannel('test_channel');
console.dir(bc)
window.addEventListener('focus', () => {
    //console.log('Пришёл');
    document.title = 'Главная';
})

window.addEventListener('blur', function(e) {
    //console.log('Ушёл')
    document.title = title;
    data = 'Главная'
    bc.postMessage(data);
 });

 let link1 =  document.querySelector('link1');
 link1.addEventListener('click', () => {
    bc.postMessage(data);
 })


