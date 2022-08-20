self.addEventListener('notificationclick', (event) => {
    if (event.action === 'open') {
        clients.openWindow('http://localhost/win8/');
    } else if (event.action === 'close') {
        console.log('handle close with button');
        event.notification.close();
    } else {
        console.log('handle notification click');
    }
}, false);