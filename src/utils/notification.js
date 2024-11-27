export const showNotification = (message, type = 'error') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-5 right-5 bg-${type === 'error' ? 'red-500' : 'green-500'} text-white px-4 py-2 rounded shadow-md z-50`;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 5000);
};
