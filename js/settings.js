document.addEventListener('DOMContentLoaded', function() {
    initializePreferences();
});

function initializePreferences() {
    applySavedBackgroundPreference();
    initializeBackgroundSelect();
}

function saveBackgroundDark() {
    localStorage.setItem('backgroundColor', '#111111');
    applySavedBackgroundPreference();
}

function saveBackgroundLight() {
    localStorage.setItem('backgroundColor', '#ffffff');
    applySavedBackgroundPreference();
}

function saveBackgroundDarkModern() {
    localStorage.setItem('backgroundColor', '#212529');
    applySavedBackgroundPreference();
}

function saveBackgroundLightModern() {
    localStorage.setItem('backgroundColor', 'grey');
    applySavedBackgroundPreference();
}

function saveBackgroundPitchBlack() {
    localStorage.setItem('backgroundColor', 'black');
    applySavedBackgroundPreference();
}

function saveBackgroundStrawberry() {
    localStorage.setItem('backgroundColor', '#ffcccc');
    applySavedBackgroundPreference();
}

function applySavedBackgroundPreference() {
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    if (savedBackgroundColor) {
        document.body.style.backgroundColor = savedBackgroundColor;
    }
}

function handleBackgroundChange(selectElement) {
    const value = selectElement.value;
    localStorage.setItem('selectedBackgroundOption', value);
    switch (value) {
        case 'option1':
            saveBackgroundDark();
            break;
        case 'option2':
            saveBackgroundLight();
            break;
        case 'option3':
            saveBackgroundDarkModern();
            break;
        case 'option4':
            saveBackgroundLightModern();
            break;
        case 'option5':
            saveBackgroundPitchBlack();
            break;
        case 'option6':
            saveBackgroundStrawberry();
            break;
    }
}

function initializeBackgroundSelect() {
    const backgroundSelect = document.getElementById('backgroundSelect');
    if (backgroundSelect) {
        const savedBackgroundOption = localStorage.getItem('selectedBackgroundOption');
        if (savedBackgroundOption) {
            backgroundSelect.value = savedBackgroundOption;
        }
        backgroundSelect.addEventListener('change', function() {
            handleBackgroundChange(this);
        });
    }
}

function setTitle() {
    const title = document.getElementById('webpageTitle').value;
    document.title = title;
}