// Centralize event listener attachment logic
function attachEventListeners() {
    const menu = document.querySelector('.menu');
    if (!menu) return;

    const moreButton = menu.querySelector('.morebtn');
    if (moreButton) {
        attachMoreButtonEventListener(moreButton);
    }
}

function attachMoreButtonEventListener(moreButton) {
    moreButton.addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        if (!menu) return;

        // Clear existing menu items
        const elementsToRemove = menu.querySelectorAll('a, button');
        elementsToRemove.forEach(function(element) {
            element.remove();
        });

        // Add new menu items
        addMenuItem(menu, 'backbtn', 'img/back.png', 'Back', injectHome);
        addMenuItem(menu, 'unblockedwebsitesbtn', 'img/unblockedwebsites.png', 'Unblocked Websites', injectUnblockedWebsites);
        addMenuItem(menu, 'tvbtn', 'img/tv.png', 'TV', injectTV);
        addMenuItem(menu, 'settingsbtn', 'img/settings.png', 'Settings', injectSettings);
        addMenuItem(menu, 'changelogbtn', 'img/changelog.png', 'Changelog', injectChangelog);
    });
}

function addMenuItem(menu, btnClass, imgSrc, imgAlt, clickHandler) {
    const link = document.createElement('a');
    link.addEventListener('click', clickHandler);
    const button = document.createElement('button');
    button.classList.add(btnClass);
    const buttonImage = document.createElement('img');
    buttonImage.src = imgSrc;
    buttonImage.alt = imgAlt;
    button.appendChild(buttonImage);
    link.appendChild(button);
    menu.appendChild(link);
}

function injectHome() {
    injectContent('home.html');
}

function injectGames() {
    injectContent('games.html');
}

function injectApps() {
    injectContent('apps.html');
}

function injectfloopyweb() {
    injectContent('floopyweb.html');
}

function injectUnblockedWebsites() {
    injectContent('unblockedwebsites.html');
}

function injectTV() {
    injectContent('tv.html');
}

function injectSettings() {
    injectContent('settings.html');
}

function injectChangelog() {
    injectContent('changelog.html');
}

function injectNews() {
    injectContent('news.html');
}

function injectContent(url) {
    document.body.innerHTML = '';
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            reattachScripts();
            attachEventListeners();  // Reattach event listeners
            if (typeof initializeGameDivs === 'function') {
                initializeGameDivs(); // Reinitialize game divs (function in the second script)
            }
        })
        .catch(error => {
            console.error(`Failed to fetch ${url}: ${error}`);
        });
}

function reattachScripts() {
    Array.from(document.body.querySelectorAll('script')).forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        if (oldScript.src) {
            newScript.src = oldScript.src;
        } else {
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        }
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

// Ensure event listeners are attached when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    attachEventListeners();  // Initial call to attach event listeners
});
