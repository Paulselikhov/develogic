const channel = new BroadcastChannel('test_channel');
title = document.title;



window.addEventListener('focus', () => {
    channel.addEventListener ('message', (event) => {
        console.log(event.data)
        document.title = event.data;
        });
})

window.addEventListener('blur', () => {
    document.title = title;
    
})