const channel = new BroadcastChannel('test_channel');
title = document.title;
data3 = {};
//channel.close();

window.addEventListener('focus', () => {
    channel.addEventListener ('message', (event) => {
        console.log(event.data);
        document.title = event.data;
        });
})

window.addEventListener('blur', () => {
    document.title = title;
})

