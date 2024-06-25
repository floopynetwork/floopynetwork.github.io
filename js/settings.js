document.addEventListener('DOMContentLoaded', function() {
    initializePreferences();
});

function initializePreferences() {
    applySavedFontPreference();
    applySavedBackgroundPreference();
    initializeToggleSwitch();
    initializeBackgroundSelect();
}

function saveFontRetro() {
    localStorage.setItem('fontFamily', "'Press Start 2P', sans-serif");
    applySavedFontPreference();
}

function saveFontNormal() {
    localStorage.setItem('fontFamily', "'Segoe UI', sans-serif");
    applySavedFontPreference();
}

function applySavedFontPreference() {
    const savedFontFamily = localStorage.getItem('fontFamily');
    if (savedFontFamily) {
        document.body.style.fontFamily = savedFontFamily;
    }
}

function saveSwitchState() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    if (toggleSwitch) {
        localStorage.setItem('switchState', toggleSwitch.checked);
    }
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

function applySavedSwitchState() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    if (toggleSwitch) {
        const savedSwitchState = localStorage.getItem('switchState');
        if (savedSwitchState !== null) {
            toggleSwitch.checked = JSON.parse(savedSwitchState);
        } else {
            toggleSwitch.checked = false;
        }
        toggleSwitch.dispatchEvent(new Event('change'));
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

function turnOn() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    if (toggleSwitch) {
        toggleSwitch.checked = true;
        toggleSwitch.dispatchEvent(new Event('change'));
        saveSwitchState();
    }
}

function turnOff() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    if (toggleSwitch) {
        toggleSwitch.checked = false;
        toggleSwitch.dispatchEvent(new Event('change'));
        saveSwitchState();
    }
}

function initializeToggleSwitch() {
    applySavedSwitchState();
    const toggleSwitch = document.getElementById('toggleSwitch');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                saveFontRetro();
            } else {
                saveFontNormal();
            }
            saveSwitchState();
        });
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