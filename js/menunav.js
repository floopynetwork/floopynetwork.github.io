function injectContent(url) {
    document.body.innerHTML = '';
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            reattachScripts();
            attachEventListeners();
            applyPreferences(); // Apply preferences after injecting content
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

document.addEventListener("DOMContentLoaded", function () {
    attachEventListeners();
    applyPreferences(); // Apply preferences on initial load
});

function attachEventListeners() {
    const menu = document.querySelector('.menu');
    if (!menu) return;

    const attachMoreButtonEventListener = (moreButton) => {
        moreButton.addEventListener('click', function() {
            const elementsToRemove = menu.querySelectorAll('a, button');
            elementsToRemove.forEach(element => element.remove());

            const backButton = document.createElement('button');
            backButton.classList.add('backbtn');
            const backButtonImage = document.createElement('img');
            backButtonImage.src = 'img/back.png';
            backButtonImage.alt = 'Back';
            backButton.appendChild(backButtonImage);
            menu.appendChild(backButton);

            const createButtonWithImage = (className, imgSrc, imgAlt, clickHandler) => {
                const link = document.createElement('a');
                link.addEventListener('click', clickHandler);
                const button = document.createElement('button');
                button.classList.add(className);
                const buttonImage = document.createElement('img');
                buttonImage.src = imgSrc;
                buttonImage.alt = imgAlt;
                button.appendChild(buttonImage);
                link.appendChild(button);
                menu.appendChild(link);
            };

            createButtonWithImage('unblockedwebsitesbtn', 'img/unblockedwebsites.png', 'Unblocked Websites', injectUnblockedWebsites);
            createButtonWithImage('tvbtn', 'img/tv.png', 'TV', injectTV);
            createButtonWithImage('settingsbtn', 'img/settings.png', 'Settings', injectSettings);
            createButtonWithImage('changelogbtn', 'img/changelog.png', 'Changelog', injectChangelog);

            backButton.addEventListener('click', function() {
                const elementsToRemove = menu.querySelectorAll('a, button');
                elementsToRemove.forEach(element => element.remove());

                createButtonWithImage('homebtn', 'img/home.png', 'Home', injectHome);
                createButtonWithImage('gamebtn', 'img/game.png', 'Games', injectGames);
                createButtonWithImage('appsbtn', 'img/apps.png', 'Apps', injectApps);
                createButtonWithImage('floopywebbtn', 'img/floopyweb.png', 'Floopy Web', injectfloopyweb);

                const moreButton = document.createElement('button');
                moreButton.classList.add('morebtn');
                const moreButtonImage = document.createElement('img');
                moreButtonImage.src = 'img/more.png';
                moreButtonImage.alt = 'More';
                moreButton.appendChild(moreButtonImage);
                menu.appendChild(moreButton);

                attachMoreButtonEventListener(moreButton);
            });
        });
    };

    const moreButton = menu.querySelector('.morebtn');
    if (moreButton) {
        attachMoreButtonEventListener(moreButton);
    }
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

function applyPreferences() {
    applySavedPreferences();
    initializeToggleSwitch();
    initializeBackgroundSelect();
}
