function deleteGameDivs(event) {
    // const dropdownContainer = document.querySelector('.dropdown-container');
    // if (dropdownContainer) {
    //     dropdownContainer.remove();
    // }

    // const gameSearchBtn = document.querySelector('.gamesearchbtn');
    // if (gameSearchBtn) {
    //     gameSearchBtn.remove();
    // }

    // const gameSearchBar = document.querySelector('.gamesearchbar');
    // if (gameSearchBar) {
    //     gameSearchBar.remove();
    // }

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const imgTag = document.querySelector('img');
    if (imgTag) {
        imgTag.remove();
    }

    const h2Tag = document.querySelector('h2');
    if (h2Tag) {
        h2Tag.remove();
    }

    const floopy = document.querySelector('.floopy');
    if (floopy) {
        floopy.remove();
    }

    const network = document.querySelector('.network');
    if (network) {
        network.remove();
    }

    const undertop = document.querySelector('.undertop');
    if (undertop) {
        undertop.remove();
    }

    const star = document.querySelector('.star');
    if (star) {
        star.remove();
    }

    const clickedDiv = event.target.closest('.gamediv');
    const gameName = clickedDiv.querySelector('.gameundertext').textContent;
    if (clickedDiv) {
        const h1 = document.createElement('h1');
        h1.style.textAlign = 'center';
        h1.textContent = gameName;
        document.body.appendChild(h1);
    }

    const gamediv = document.querySelectorAll('.gamediv');
    gamediv.forEach((div) => {
        div.remove();
    });

    const frameContainer = document.createElement('div');
    frameContainer.style.display = 'flex';
    frameContainer.style.justifyContent = 'center';
    frameContainer.style.alignItems = 'center';
    frameContainer.style.width = '100vw';
    frameContainer.style.height = '100vh';

    const frame = document.createElement('iframe');
    frame.style.width = '800px';
    frame.style.height = '800px';

    const description = document.createElement('p');
    description.style.textAlign = 'center';
    description.style.fontFamily = 'Arial, sans-serif';
    description.style.color = 'white';
    description.textContent = 'Loading...';
    description.style.fontWeight = 'bold';

    const gameLinks = {
        '1v1.lol': 'https://dontlookbehindyoubuddy.github.io/games/1v1-lol/index.htm',
        'Slope': 'https://floopynetworkgamingservice.github.io/dfgjkldfgnjk/',
        'Baldi\'s Basics': 'https://floopynetworkgamingservice.github.io/fgdgdfgdfdfrdgf/',
        'Google Baseball': 'https://dontlookbehindyoubuddy.github.io/games/google-baseball/index.html',
        'Eaglercraft 1.8.8': 'https://floopynetworkgamingservice.github.io/dskfdhjgdkl/',
        'BitLife': 'https://floopynetworkgamingservice.github.io/tgyhjfdhjgfjk/',
        'Retro Bowl': 'https://loserboysonyt.github.io/',
        'HexGL': 'https://floopynetworkgamingservice.github.io/edrftgyrtghj/',
        'Flappy Bird': 'https://scratch.mit.edu/projects/17828009/embed',
        'Elastic Man': 'https://floopynetworkgamingservice.github.io/dfhjdfhjdfjkui/',
        'Tunnel Rush': 'https://floopynetworkgamingservice.github.io/fjkgjkfdjkdfgdgf/',
        'Tunnel Rush 2': 'https://floopynetworkgamingservice.github.io/fghdfghfghfghfgd/',
        'FNAF 1': 'https://dontlookbehindyoubuddy.github.io/games/FNAF1/index.html',
        'FNAF 2': 'https://dontlookbehindyoubuddy.github.io/games/FNAF2/index.html',
        'FNAF 3': 'https://dontlookbehindyoubuddy.github.io/games/3/index.html',
    };

    const gameDescriptions = {
        '1v1.lol': '1v1.lol is an online multiplayer game that combines shooting and building mechanics in fast-paced, head-to-head combat. Developed by JustPlay.LOL, it offers a variety of game modes, including 1v1 duels, Box Fights, and Battle Royale. Players can quickly construct walls, ramps, and platforms to gain tactical advantages and protect themselves from enemy fire. The game features intuitive controls, customizable avatars, and a competitive ranking system. Accessible on both web browsers and mobile devices, 1v1.lol has a vibrant community and supports an active esports scene with regular tournaments. Its blend of strategic building and intense shooting makes it a favorite among gamers seeking quick, skill-based matches.',
        'Slope': 'Slope is an addictive, fast-paced endless runner game where players control a ball rolling down an increasingly steep and challenging slope. Developed by RobKayS and published by Y8, the game features simple yet precise controls, using arrow keys to steer the ball. Players must navigate through a neon-lit, futuristic environment filled with obstacles, aiming to achieve the highest possible score without falling off the edge or crashing. The game’s vibrant, geometric design and dynamic music create an immersive experience, while global leaderboards add a competitive edge. Accessible on both web browsers and mobile devices, Slope offers an engaging and thrilling gameplay experience that tests players’ reflexes and decision-making skills.',
        'Baldi\'s Basics': 'Baldi\'s Basics is a free-to-play indie horror game that parodies educational video games from the 1990s. Developed by Micah McGonigal, the game features a surreal and unsettling school environment where players must solve math problems to progress. However, the titular character, Baldi, becomes increasingly aggressive and unpredictable as the player collects notebooks, creating a tense and challenging experience. With its retro graphics, quirky characters, and eerie atmosphere, Baldi\'s Basics has gained a cult following and spawned numerous fan-made mods and spin-offs. The game\'s blend of humor, horror, and nostalgia has made it a popular choice for content creators and streamers looking for unique gaming experiences.',
        'Google Baseball': 'Google Baseball is a fun and interactive browser game that challenges players to hit a virtual baseball as far as possible. Developed by Google as an Easter egg for its search engine, the game features simple controls and addictive gameplay. Players use their mouse or touchpad to swing the bat and hit the ball, aiming to achieve the longest distance possible. The game tracks each hit\'s distance and displays it on a virtual baseball field, allowing players to compete against themselves or others. With its charming graphics and intuitive mechanics, Google Baseball offers a lighthearted and entertaining diversion for users of all ages.',
        'Eaglercraft 1.8.8': 'Eaglercraft 1.8.8 is a web app that brings the classic Minecraft experience directly to your browser, allowing you to play without any downloads or installations. Emulating Minecraft version 1.8.8, it offers the same beloved gameplay, including block building, exploration, crafting, and survival in a procedurally generated world. Eaglercraft 1.8.8 supports multiplayer, enabling players to connect and collaborate or compete in various game modes. With its ease of access and faithful recreation of Minecraft\'s features, Eaglercraft 1.8.8 makes it convenient for fans to enjoy the iconic game anytime, anywhere.',
        'BitLife': 'BitLife is a text-based life simulation game that allows players to make choices and live out virtual lives in various scenarios. Developed by Candywriter, the game features a wide range of activities and decisions that can influence a character\'s life path, from birth to death. Players can choose their character attributes, make career choices, form relationships, and experience random events that shape their virtual existence. With its humorous writing, diverse gameplay options, and unpredictable outcomes, BitLife offers a unique and engaging experience that encourages experimentation and creativity. The game has gained a large following and continues to receive updates and new content regularly.',
        'Retro Bowl': 'Retro Bowl is a retro-style American football game that combines arcade gameplay with strategic team management. Developed by New Star Games, the game offers a simplified and accessible football experience, allowing players to control their team on the field and make key decisions off the field. Players can customize their team, draft players, call plays, and compete in games to win championships and build a dynasty. With its charming pixel art graphics, intuitive controls, and engaging gameplay, Retro Bowl captures the essence of classic football video games while adding modern features and mechanics. The game\'s blend of action and strategy makes it a popular choice for football fans and gamers looking for a nostalgic sports experience.',
        'HexGL': 'HexGL is a futuristic racing game that challenges players to pilot high-speed hovercraft through a series of neon-lit tracks. Developed by Thibaut Despoulain (BKcore), the game features stunning 3D graphics, dynamic lighting effects, and a pulsating electronic soundtrack that create an immersive and exhilarating experience. Players must navigate tight turns, avoid obstacles, and maintain top speed to compete for the fastest lap times and reach the finish line. With its sleek design, responsive controls, and fast-paced gameplay, HexGL offers a thrilling and visually striking racing experience that appeals to fans of the sci-fi and racing genres.',
        'Flappy Bird': 'Flappy Bird is a simple yet challenging mobile game that became a viral sensation in 2013. Developed by Vietnamese developer Dong Nguyen, the game features a bird that players must navigate through a series of green pipes by tapping the screen to flap its wings. The objective is to fly as far as possible without colliding with the pipes, testing players\' reflexes and coordination. With its minimalist graphics, addictive gameplay, and high difficulty level, Flappy Bird quickly gained popularity and became a cultural phenomenon. Despite its controversial removal from app stores, the game remains a nostalgic favorite for many players and has inspired countless clones and imitators.',
        'Elastic Man': 'Elastic Man is a fun and quirky web-based game that offers a simple yet amusing experience. Players interact with a highly stretchable and elastic virtual face, pulling and tugging at it to watch it distort in humorous ways. The game features realistic physics and smooth animations, providing a satisfying and entertaining diversion as you manipulate the elastic skin. With its easy-to-use controls and playful concept, Elastic Man delivers a lighthearted and engaging way to pass the time, making it a delightful choice for a quick and stress-free gaming session.',
        'Tunnel Rush': 'Tunnel Rush is a fast-paced and visually striking endless runner game that challenges players to navigate through a series of neon tunnels at breakneck speeds. Developed by Deer Cat, the game features simple controls and addictive gameplay, requiring players to dodge obstacles and collect gems to progress. The game\'s vibrant colors, dynamic lighting effects, and pulsating electronic soundtrack create an immersive and exhilarating experience that tests players\' reflexes and coordination. With its challenging levels and endless mode, Tunnel Rush offers a thrilling and engaging gameplay experience that keeps players coming back for more.',
        'Tunnel Rush 2': 'Tunnel Rush 2 is the highly anticipated sequel to the popular endless runner game Tunnel Rush. Developed by Deer Cat, the game builds on the success of its predecessor with new levels, obstacles, and challenges for players to overcome. Featuring the same fast-paced gameplay and neon-lit aesthetic, Tunnel Rush 2 offers an immersive and visually striking experience that tests players\' reflexes and coordination. With its addictive gameplay and dynamic difficulty curve, the game provides a thrilling and engaging experience that keeps players on the edge of their seats as they navigate through the tunnels at breakneck speeds.',
        'FNAF 1': 'Five Nights at Freddy\'s (FNAF) is a popular horror game series created by Scott Cawthon. The first installment in the series, FNAF 1, introduces players to Freddy Fazbear\'s Pizza, a haunted animatronic-filled restaurant where players must survive five nights as a night security guard. The game features tense gameplay, jump scares, and a chilling atmosphere that has captivated players worldwide. With its unique premise, engaging lore, and memorable characters, FNAF 1 has become a cult classic in the horror genre and spawned numerous sequels, spin-offs, and merchandise. The game\'s blend of suspense, strategy, and storytelling has made it a favorite among horror game enthusiasts and content creators alike.',
        'FNAF 2': 'Five Nights at Freddy\'s 2 (FNAF 2) is the second installment in the popular horror game series created by Scott Cawthon. Building on the success of the original game, FNAF 2 introduces new animatronics, gameplay mechanics, and challenges for players to overcome. Set in a new location, players take on the role of a night security guard at Freddy Fazbear\'s Pizza, where they must survive five nights while avoiding the haunted animatronics that roam the establishment. With its intense gameplay, jump scares, and intricate lore, FNAF 2 expands on the series\'s mythology and deepens the mystery surrounding the haunted pizzeria. The game\'s blend of horror, strategy, and storytelling has made it a fan favorite and a staple of the horror game genre.',
        'FNAF 3': 'Five Nights at Freddy\'s 3 (FNAF 3) is the third installment in the popular horror game series created by Scott Cawthon. Continuing the story of the haunted animatronics at Freddy Fazbear\'s Pizza, the game introduces new characters, locations, and gameplay mechanics for players to explore. Set in a horror attraction based on the infamous pizzeria, players must survive five nights as a night security guard while avoiding the phantom animatronics that lurk in the shadows. With its tense atmosphere, jump scares, and intricate storytelling, FNAF 3 deepens the series\'s lore and expands on the mysteries surrounding the haunted franchise. The game\'s blend of horror, strategy, and suspense has made it a fan favorite and a standout entry in the horror game genre.',
    }

    if (gameName in gameLinks) {
        frame.src = gameLinks[gameName];
    } else {
        frame.src = '404.html';
        console.log(gameName + ' not found in gameLinks')
    }

    if (gameName in gameDescriptions) {
        description.textContent = gameDescriptions[gameName];
    } else {
        description.textContent = 'This game is unavailable.';
    }

    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.textContent = 'Launch in Fullscreen';
    fullscreenBtn.style.position = 'absolute';
    fullscreenBtn.style.justifyContent = 'center';
    fullscreenBtn.style.alignItems = 'center';
    fullscreenBtn.style.padding = '10px';
    fullscreenBtn.style.border = 'none';
    fullscreenBtn.style.backgroundColor = 'red';
    fullscreenBtn.style.color = 'white';
    fullscreenBtn.style.cursor = 'pointer';
    fullscreenBtn.style.borderRadius = '5px';
    fullscreenBtn.style.fontFamily = 'Arial, sans-serif';
    fullscreenBtn.style.fontWeight = 'bold';
    fullscreenBtn.style.fontSize = '16px';
    fullscreenBtn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    fullscreenBtn.style.transition = 'background-color 0.3s';
    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            frame.requestFullscreen();
        }
    });
    fullscreenBtn.addEventListener('mouseover', () => {
        fullscreenBtn.style.backgroundColor = 'white';
        fullscreenBtn.style.color = 'red'; // Add this line to change the text color on mouseover
    });
    fullscreenBtn.addEventListener('mouseout', () => {
        fullscreenBtn.style.backgroundColor = 'red';
        fullscreenBtn.style.color = 'white'; // Add this line to change the text color on mouseout
    });
    fullscreenBtn.style.left = '50%'; // Add this line to center the button horizontally
    fullscreenBtn.style.transform = 'translateX(-50%)'; // Add this line to center the button horizontally
    fullscreenBtn.style.marginTop = '20px'; // Add this line to add some space between the button and the frame
    document.body.appendChild(fullscreenBtn);

    frameContainer.appendChild(frame);
    document.body.appendChild(frameContainer);

    document.body.appendChild(description);
}