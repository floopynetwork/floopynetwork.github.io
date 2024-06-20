let notificationMarginBottom = 100;
let notificationCount = 0;

function deleteNotification(notification) {
    console.log('DELETE NOTIFICATION HAS BEEN CALLED');
    let start = performance.now();
    let requestId = null;

    function animate(time) {
        let timePassed = time - start;
        if (timePassed >= 500) {
            cancelAnimationFrame(requestId);
            notification.remove();
            adjustNotificationPositions();
            return;
        }
        notification.style.transform = `translateX(${timePassed / 1.43}px)`; // move 350px in 0.5 seconds
        requestId = requestAnimationFrame(animate);
    }
    requestId = requestAnimationFrame(animate);
}

function adjustNotificationPositions() {
    const notifications = document.querySelectorAll('.notifications-container');
    notifications.forEach((notification, index) => {
        notification.style.marginBottom = `${notificationMarginBottom + (index * 260)}px`;
    });
}

function createNotification(title, description, image, time) {
    // Create the HTML elements
    var notification = document.createElement('div');
    notification.className = 'notifications-container';

    var notificationTitle = document.createElement('h1');
    notificationTitle.className = 'notification-title';
    notificationTitle.textContent = title;

    var closeButton = document.createElement('button');
    closeButton.className = 'notification-close-button';
    closeButton.textContent = 'CLOSE';
    closeButton.onclick = () => {
        clearInterval(timerInterval);
        clearInterval(timestampInterval);
        deleteNotification(notification);
        notificationCount -= 1;
    };

    var notificationDescription = document.createElement('p');
    notificationDescription.className = 'notification-description';
    notificationDescription.textContent = description;

    var logoContainer = document.createElement('center');
    var logoImage = document.createElement('img');
    logoImage.src = image;
    logoImage.alt = 'Logo';
    logoImage.className = 'logo';
    logoContainer.appendChild(logoImage);

    // Add the elements to the notification container
    notification.appendChild(notificationTitle);
    notification.appendChild(closeButton);
    notification.appendChild(notificationDescription);
    notification.appendChild(logoContainer);

    // Add a timer to the bottom of the notification
    var timerElement = document.createElement('p');
    timerElement.className = 'notification-timer';
    timerElement.textContent = 'Notification will disappear in ' + time;
    notification.appendChild(timerElement);

    // Add a timestamp to the top left of the notification
    var timestampElement = document.createElement('p');
    timestampElement.className = 'notification-timestamp';
    timestampElement.textContent = 'Notification just now';
    notification.appendChild(timestampElement);

    // Add the notification to the body
    document.body.appendChild(notification);

    // Start the timer
    var timerInterval = setInterval(function () {
        time--;
        timerElement.textContent = 'Notification will disappear in ' + time;
        if (time <= 0) {
            clearInterval(timerInterval);
            clearInterval(timestampInterval);
            deleteNotification(notification);
            notificationCount -= 1;
        }
    }, 1000); // decrement every 1 second

    // Start the timestamp updater
    let secondsAgo = 0;
    const timestampInterval = setInterval(function () {
        secondsAgo++;
        if (secondsAgo < 60) {
            timestampElement.textContent = `Notification ${secondsAgo} sec${secondsAgo > 1 ? 's' : ''} ago`;
        } else if (secondsAgo < 3600) {
            const minutesAgo = Math.floor(secondsAgo / 60);
            timestampElement.textContent = `Notification ${minutesAgo} min${minutesAgo > 1 ? 's' : ''} ago`;
        } else {
            const hoursAgo = Math.floor(secondsAgo / 3600);
            timestampElement.textContent = `Notification ${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
        }
    }, 1000);

    notificationCount += 1;
    adjustNotificationPositions();
}

function clearNotificationData() {
    notificationCount = 0;
    const notifications = document.querySelectorAll('.notifications-container');
    notifications.forEach(notification => notification.remove());
}
