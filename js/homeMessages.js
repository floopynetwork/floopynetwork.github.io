document.addEventListener('DOMContentLoaded', (event) => {
    const undertop = document.querySelector('.undertop');
    const messages = ['Looking for games? Look here.', '#1 unblocked website.', 'Games in class? Be a bit sneaky.', 'Oh. Did I mention this website has TV?', 'Chromebooks are honestly bad.', 'Oh, you found this site. Welcome.', 'This is the new meta of unblocked games.', 'Created by a dumb 12 year old.', 'Teachers hate this website.', 'This website is not blocked by your school.'];

    setInterval(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        undertop.textContent = randomMessage;
    }, 2000);
});