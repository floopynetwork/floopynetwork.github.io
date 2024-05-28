function attachEventListeners() {
    const menu = document.querySelector('.menu');
    if (!menu) return;

    const attachMoreButtonEventListener = (moreButton) => {
        moreButton.addEventListener('click', function() {
            const elementsToRemove = menu.querySelectorAll('a, button');

            elementsToRemove.forEach(function(element) {
                element.remove();
            });

            const backButton = document.createElement('button');
            backButton.classList.add('backbtn');
            const backButtonImage = document.createElement('img');
            backButtonImage.src = 'img/back.png';
            backButtonImage.alt = 'Back';
            backButton.appendChild(backButtonImage);
            menu.appendChild(backButton);

            const unblockedWebsitesLink = document.createElement('a');
            unblockedWebsitesLink.addEventListener('click', injectUnblockedWebsites);
            const unblockedWebsitesButton = document.createElement('button');
            unblockedWebsitesButton.classList.add('unblockedwebsitesbtn');
            const unblockedWebsitesButtonImage = document.createElement('img');
            unblockedWebsitesButtonImage.src = 'img/unblockedwebsites.png';
            unblockedWebsitesButtonImage.alt = 'Unblocked Websites';
            unblockedWebsitesButton.appendChild(unblockedWebsitesButtonImage);
            unblockedWebsitesLink.appendChild(unblockedWebsitesButton);
            menu.appendChild(unblockedWebsitesLink);

            const TVLink = document.createElement('a');
            TVLink.addEventListener('click', injectTV);
            const TVButton = document.createElement('button');
            TVButton.classList.add('tvbtn');
            const TVButtonImage = document.createElement('img');
            TVButtonImage.src = 'img/tv.png';
            TVButtonImage.alt = 'TV';
            TVButton.appendChild(TVButtonImage);
            TVLink.appendChild(TVButton);
            menu.appendChild(TVLink);

            const settingsLink = document.createElement('a');
            settingsLink.addEventListener('click', injectSettings);
            const settingsButton = document.createElement('button');
            settingsButton.classList.add('settingsbtn');
            const settingsButtonImage = document.createElement('img');
            settingsButtonImage.src = 'img/settings.png';
            settingsButtonImage.alt = 'Settings';
            settingsButton.appendChild(settingsButtonImage);
            settingsLink.appendChild(settingsButton);
            menu.appendChild(settingsLink);

            const changelogLink = document.createElement('a');
            changelogLink.addEventListener('click', injectChangelog);
            const changelogButton = document.createElement('button');
            changelogButton.classList.add('changelogbtn');
            const changelogButtonImage = document.createElement('img');
            changelogButtonImage.src = 'img/changelog.png';
            changelogButtonImage.alt = 'Changelog';
            changelogButton.appendChild(changelogButtonImage);
            changelogLink.appendChild(changelogButton);
            menu.appendChild(changelogLink);

            backButton.addEventListener('click', function() {
                const elementsToRemove = menu.querySelectorAll('a, button');

                elementsToRemove.forEach(function(element) {
                    element.remove();
                });

                const homeLink = document.createElement('a');
                homeLink.addEventListener('click', injectHome);
                const homeButton = document.createElement('button');
                homeButton.classList.add('homebtn');
                const homeButtonImage = document.createElement('img');
                homeButtonImage.src = 'img/home.png';
                homeButtonImage.alt = 'Home';
                homeButton.appendChild(homeButtonImage);
                homeLink.appendChild(homeButton);
                menu.appendChild(homeLink);

                const gameLink = document.createElement('a');
                gameLink.addEventListener('click', injectGames);
                const gameButton = document.createElement('button');
                gameButton.classList.add('gamebtn');
                const gameButtonImage = document.createElement('img');
                gameButtonImage.src = 'img/game.png';
                gameButtonImage.alt = 'Games';
                gameButton.appendChild(gameButtonImage);
                gameLink.appendChild(gameButton);
                menu.appendChild(gameLink);

                const appsLink = document.createElement('a');
                appsLink.addEventListener('click', injectApps);
                const appsButton = document.createElement('button');
                appsButton.classList.add('appsbtn');
                const appsButtonImage = document.createElement('img');
                appsButtonImage.src = 'img/apps.png';
                appsButtonImage.alt = 'Apps';
                appsButton.appendChild(appsButtonImage);
                appsLink.appendChild(appsButton);
                menu.appendChild(appsLink);

                const floopywebLink = document.createElement('a');
                floopywebLink.addEventListener('click', injectfloopyweb);
                const floopywebButton = document.createElement('button');
                floopywebButton.classList.add('floopywebbtn');
                const floopywebButtonImage = document.createElement('img');
                floopywebButtonImage.src = 'img/floopyweb.png';
                floopywebButtonImage.alt = 'floopy Web';
                floopywebButton.appendChild(floopywebButtonImage);
                floopywebLink.appendChild(floopywebButton);
                menu.appendChild(floopywebLink);

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
    document.body.innerHTML = '';
    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

// Similarly for the rest of the inject functions
function injectGames() {
    document.body.innerHTML = '';
    fetch('games1.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

function injectApps() {
    document.body.innerHTML = '';
    fetch('apps.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

function injectfloopyweb() {
    document.body.innerHTML = '';
    fetch('floopyweb.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

function injectUnblockedWebsites() {
    document.body.innerHTML = '';
    fetch('unblockedwebsites.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

function injectTV() {
    document.body.innerHTML = '';
    fetch('tv.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

function injectSettings() {
    document.body.innerHTML = '';
    fetch('settings.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

function injectChangelog() {
    document.body.innerHTML = '';
    fetch('changelog.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
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

            // Reattach the event listeners after injecting content
            attachEventListeners();
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', (event) => {
    attachEventListeners();
});
