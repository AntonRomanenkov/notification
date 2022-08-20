if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

function notifyMe() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            var options = {
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                icon: './img/1.jpg',
                actions: [
                    { action: 'open', title: 'Open' },
                    { action: 'close', title: 'Close' },
                ],
                requireInteraction: true
            };
            reg.showNotification('Go to the screen of Win 8', options);
        });
    } else {
        Notification.requestPermission();
    }
}