
const button = document.querySelector('.button')
const items = document.querySelectorAll('.content-body__item')
const load = document.querySelector('.well_animation')
  





let toggle = false;

button.addEventListener('click', inClick)

function inClick(){

    getToggle();
    let item = 0;
    let arrItems = Array.from(items);

    for (let div of arrItems){
        div.children[0].children[0].className = 'well'
    }

    let promis = check();

    promis
    .then( () => check())
    .catch( () => check())
    .then( () => check())
    .catch( () => check())
    .then( () => check())
    .catch( () => check())
    .then( () => button.addEventListener('click', inClick) )

    function getToggle(){
        if (toggle == false){
            toggle = true
        } else {
            toggle = false
        }
    }
    function check(){
        button.removeEventListener('click', inClick)
        if (item < items.length && toggle == true){
            items[item].children[0].children[0].classList.add('well__animation');
            let arr = ['Успех', 'ошибка']
            let rand = Math.floor(Math.random() * arr.length);
            let randomValue = getRandomInt(1, 5)*1000;

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
          
            let promise = new Promise( (resolve, reject) => {
                setTimeout( () => {
                    console.log('Download completed')
                    console.log(arr[rand])
                    if(rand === 1){
                    reject(replaceIconReject())}
                    else resolve(replaceIconResolve())
                }, randomValue)

            })
       return promise
     } else {
        button.addEventListener('click', inClick)
        return
        }
    }
    function replaceIconResolve(){
        items[item].children[0].children[0].classList.add('checked')
        item = item+1
    }
    function replaceIconReject(){
        items[item].children[0].children[0].classList.add('cansel')
        item = item+1
    }

    
}
