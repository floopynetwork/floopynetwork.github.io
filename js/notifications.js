let notificationMarginBottom = 100;
let notificationOverflow = 0;
let notificationCount = 0;

function deleteNotifications() {
    console.log('DELETE NOTIFICATIONS HAS BEEN CALLED')
    const notificationsContainer = document.querySelector('.notifications-container');
    if (notificationsContainer) {
        let start = performance.now();
        let requestId = null;
        function animate(time) {
            let timePassed = time - start;
            if (timePassed >= 500) { // decrease the duration to 0.5 seconds
            cancelAnimationFrame(requestId);
            notificationsContainer.remove();
            return;
            }
            notificationsContainer.style.transform = `translateX(${timePassed / 1.43}px)`; // move 350px in 0.5 seconds
            requestId = requestAnimationFrame(animate);
        }
        requestId = requestAnimationFrame(animate);
    }
}

function createNotification(title, description, image, time) {
    notificationCount += 1
    if (notificationCount === 1) {
        notificationOverflow = 0;
        notificationMarginBottom = 100;
    }
    time += notificationOverflow;
    console.log(notificationMarginBottom)
    // Create the HTML elements
    var notificationsContainer = document.createElement('div');
    notificationsContainer.style.marginBottom = String(notificationMarginBottom) + 'px'
    notificationsContainer.className = 'notifications-container';

    var notificationTitle = document.createElement('h1');
    notificationTitle.className = 'notification-title';
    notificationTitle.textContent = title;

    var closeButton = document.createElement('button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '0';
    closeButton.style.right = '0';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.padding = '5px 10px';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.textContent = 'CLOSE';
    closeButton.onclick = deleteNotifications;

    var notificationDescription = document.createElement('p');
    notificationDescription.className = 'notification-description';
    notificationDescription.textContent = description;

    var logoContainer = document.createElement('center');
    var logoImage = document.createElement('img');
    logoImage.src = image;
    logoImage.alt = 'Logo';
    logoImage.className = 'logo';
    logoContainer.appendChild(logoImage);

    // Add the elements to the notifications container
    notificationsContainer.appendChild(notificationTitle);
    notificationsContainer.appendChild(closeButton);
    notificationsContainer.appendChild(notificationDescription);
    notificationsContainer.appendChild(logoContainer);

    // Add a timer to the bottom of the notification
    var timerElement = document.createElement('p');
    timerElement.className = 'notification-timer';
    timerElement.textContent = 'Notification will disappear in ' + time
    notificationsContainer.appendChild(timerElement);

    // Add the notifications container to the body
    document.body.appendChild(notificationsContainer);

    // Set welcomeNotificationOccurred to true
    welcomeNotificationOccurred = true;

    // Start the timer
    var timerInterval = setInterval(function() {
        time--;
        timerElement.textContent = 'Notification will disappear in ' + time
        if (time <= 0) {
            clearInterval(timerInterval);
            deleteNotifications();
            notificationCount -= 1;
        }
    }, 1000); // decrement every 1 second
    notificationMarginBottom += 260;
    notificationOverflow += 1;
}

function clearNotificationData() {
    notificationOverflow = 0;
    notificationMarginBottom = 100;
    notificationCount = 0;
}