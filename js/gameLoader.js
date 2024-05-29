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

    const rainbowText = document.querySelector('.rainbow-text');
    if (rainbowText) {
        rainbowText.remove();
    }

    const rainbowText2 = document.querySelector('.rainbow-text');
    if (rainbowText2) {
        rainbowText2.remove();
    }

    const rainbowText3 = document.querySelector('.rainbow-text');
    if (rainbowText3) {
        rainbowText3.remove();
    }

    const substitute = document.querySelector('.substitute');
    if (substitute) {
        substitute.remove();
    }

    const substitute2 = document.querySelector('.substitute');
    if (substitute2) {
        substitute2.remove();
    }

    const substitute3 = document.querySelector('.substitute');
    if (substitute3) {
        substitute3.remove();
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
    frameContainer.style.flexDirection = 'column'; // Add this line to stack elements vertically

    const frame = document.createElement('iframe');
    frame.style.width = '800px';
    frame.style.height = '800px';

    const description = document.createElement('p');
    description.style.textAlign = 'center';
    description.style.fontFamily = 'Arial, sans-serif';
    description.style.color = 'white';
    description.textContent = 'Loading...';
    description.style.fontWeight = 'bold';

    frameContainer.appendChild(frame);
    frameContainer.appendChild(description);

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
        'Geometry Dash': 'https://scratch.mit.edu/projects/105500895/embed',
        'Geometry Dash Subzero': 'https://scratch.mit.edu/projects/216343253/embed',
        'Geometry Dash Meltdown': 'https://scratch.mit.edu/projects/143663274/embed',
        'Geometry Dash World Toxic Factory': 'https://scratch.mit.edu/projects/224236914/embed',
        'Basketball Stars': 'https://floopynetworkgamingservice.github.io/cfjhvdjkvbhfdjkg/',
        'Basket Random': 'https://floopynetworkgamingservice.github.io/kghjfkogljhl/',
        'Basketball Legends': 'https://floopynetworkgamingservice.github.io/gjhjkcvbdg/',
        'OvO': 'https://floopynetworkgamingservice.github.io/fdgdfghfdgh/',
        'Eggy Car': 'https://floopynetworkgamingservice.github.io/dfgdfgjdfjhg/',
        'Cookie Clicker': 'https://floopynetworkgamingservice.github.io/vghjfghjkghjfk/',
        'Super Mario Wonder': 'https://floopynetworkgamingservice.github.io/fghjghghjghj/',
        'Fruit Ninja': 'https://floopynetworkgamingservice.github.io/ghjfghjghjghjf/',
        'Spacebar Clicker': 'https://floopynetworkgamingservice.github.io/dhdfjghjklgdf/',
        'Subway Surfers': 'https://floopynetworkgamingservice.github.io/fghjfghjfghj/',
        'Crossy Road': 'https://floopynetworkgamingservice.github.io/vnghfghjvbfgh/',
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
        'Geometry Dash': 'Geometry Dash is a rhythm-based platformer game developed by Robert Topala. In the game, players control a square-shaped character that must navigate through various obstacles and challenges by jumping, flying, and flipping to the beat of the music. With its fast-paced gameplay, catchy soundtrack, and vibrant visuals, Geometry Dash offers an engaging and addictive experience that tests players\' reflexes and timing. The game features a level editor that allows players to create and share their custom levels, adding to its replay value and community-driven content. With its challenging levels and creative gameplay, Geometry Dash has become a popular choice for gamers looking for a fun and rewarding platforming experience.',
        'Geometry Dash Subzero': 'Geometry Dash Subzero is a free mini version of the popular rhythm-based platformer game Geometry Dash. Developed by Robert Topala, the game features three challenging levels with unique obstacles and gameplay mechanics. Players control a square-shaped character that must jump, fly, and flip through each level to the beat of the music, avoiding hazards and collecting coins along the way. With its fast-paced gameplay, catchy soundtrack, and vibrant visuals, Geometry Dash Subzero offers an engaging and addictive experience that tests players\' reflexes and timing. The game\'s challenging levels and creative design make it a popular choice for fans of the series and players looking for a fun and rewarding platforming experience.',
        'Geometry Dash Meltdown': 'Geometry Dash Meltdown is a free mini version of the popular rhythm-based platformer game Geometry Dash. Developed by Robert Topala, the game features three challenging levels with unique obstacles and gameplay mechanics. Players control a square-shaped character that must jump, fly, and flip through each level to the beat of the music, avoiding hazards and collecting coins along the way. With its fast-paced gameplay, catchy soundtrack, and vibrant visuals, Geometry Dash Meltdown offers an engaging and addictive experience that tests players\' reflexes and timing. The game\'s challenging levels and creative design make it a popular choice for fans of the series and players looking for a fun and rewarding platforming experience.',
        'Geometry Dash World Toxic Factory': 'Geometry Dash World Toxic Factory is a custom level created by the Geometry Dash community that showcases the game\'s level editor and user-generated content. Developed by RobTop, the level features a challenging and visually striking design set in a toxic factory environment. Players control a square-shaped character that must navigate through hazardous obstacles and traps to reach the end of the level. With its fast-paced gameplay, catchy soundtrack, and creative level design, Geometry Dash World Toxic Factory offers an engaging and challenging experience that tests players\' reflexes and timing. The level demonstrates the creativity and skill of the Geometry Dash community and highlights the game\'s vibrant and active player base.',
        'Basketball Stars': 'Basketball Stars is a fast-paced multiplayer basketball game that challenges players to compete in one-on-one duels or shootouts against opponents from around the world. Developed by Madpuffers, the game features intuitive controls, realistic physics, and smooth animations that capture the excitement and intensity of real basketball games. Players can customize their characters, upgrade their skills, and unlock new courts and equipment as they progress through the game. With its engaging gameplay, vibrant graphics, and competitive multiplayer modes, Basketball Stars offers an immersive and thrilling basketball experience that appeals to sports fans and gamers alike.',
        'Basket Random': 'Basket Random is a wacky and unpredictable basketball game that pits players against each other in chaotic one-on-one matches. Developed by Madpuffers, the game features quirky characters, bizarre power-ups, and unconventional basketball courts that add a humorous and unpredictable twist to the sport. Players must use their skills and reflexes to outmaneuver their opponents, score baskets, and win matches in a variety of zany environments. With its colorful graphics, fast-paced gameplay, and lighthearted tone, Basket Random offers a fun and entertaining basketball experience that is sure to delight players of all ages.',
        'Basketball Legends': 'Basketball Legends is a popular basketball game that allows players to compete in one-on-one or two-on-two matches with famous basketball players. Developed by MadPuffers, the game features intuitive controls, smooth animations, and realistic physics that capture the excitement and intensity of real basketball games. Players can choose from a roster of legendary basketball stars, each with unique skills and abilities, and compete in tournaments or quick matches to prove their basketball prowess. With its engaging gameplay, vibrant graphics, and competitive multiplayer modes, Basketball Legends offers an immersive and thrilling basketball experience that appeals to sports fans and gamers alike.',
        'OvO': 'OvO by Dedra Games is a fast-paced platformer that challenges players with its minimalistic design and precise controls. In this game, you guide a small character through a series of increasingly complex levels filled with obstacles, traps, and puzzles. The game features smooth, responsive controls that allow for fluid movement and quick reflexes, essential for navigating the intricate platforming challenges. OvO\'s clean graphics and engaging level design keep players hooked as they strive to complete each stage and achieve the fastest times. With its blend of simplicity and difficulty, OvO offers a rewarding experience for fans of skill-based platformers.',
        'Eggy Car': 'Eggy Car by Beedo Games is a delightful and challenging driving game where players must transport a fragile egg over a series of bumpy and unpredictable terrains. The goal is to keep the egg balanced on top of the car without letting it fall off as you navigate hills, valleys, and obstacles. The game\'s physics-based mechanics require careful driving and precise control to avoid losing the egg. With its charming graphics, simple controls, and addictive gameplay, Eggy Car provides an entertaining and engaging experience that tests your patience and driving skills.',
        'Cookie Clicker': 'Cookie Clicker is an incremental idle game that challenges players to bake as many cookies as possible by clicking on a giant cookie on the screen. Developed by Orteil, the game features simple mechanics and addictive gameplay that encourages players to click furiously to increase their cookie production. Players can use the cookies they earn to purchase upgrades, buildings, and power-ups that automate the baking process and boost their cookie output. With its charming graphics, humorous writing, and endless progression, Cookie Clicker offers a relaxing and rewarding experience that keeps players coming back for more. The game has inspired a genre of idle games and continues to receive updates and new content regularly.',
        'Super Mario Wonder': 'Super Mario Wonder is a fan-made platformer game that pays homage to the classic Super Mario series. Developed by a dedicated fan, the game features familiar characters, enemies, and power-ups in a new and challenging adventure. Players control Mario as he navigates through colorful levels, defeats enemies, and collects coins to reach the flagpole at the end of each stage. With its retro graphics, catchy music, and engaging gameplay, Super Mario Wonder captures the essence of the beloved franchise while adding its own unique twists and surprises. The game offers a nostalgic and entertaining experience for fans of the Super Mario series and platformer games in general.',
        'Fruit Ninja': 'Fruit Ninja is a popular mobile game that challenges players to slice and dice various fruits with a swipe of their finger. Developed by Halfbrick Studios, the game features fast-paced gameplay, colorful graphics, and satisfying fruit-slicing mechanics that make it a fun and addictive experience. Players must slice as many fruits as possible while avoiding bombs and other obstacles to achieve high scores and unlock new blades and backgrounds. With its simple controls, engaging gameplay, and competitive leaderboards, Fruit Ninja offers a casual and entertaining gaming experience that appeals to players of all ages.',
        'Spacebar Clicker': 'Spacebar Clicker is a simple and addictive web-based game that challenges players to click the spacebar as many times as possible within a limited time frame. The game features a countdown timer and a counter that tracks the number of times the spacebar is pressed, allowing players to compete against themselves or others for the highest score. With its minimalist design and straightforward mechanics, Spacebar Clicker offers a quick and engaging diversion that tests players\' speed and dexterity. The game\'s competitive nature and easy accessibility make it a popular choice for players looking for a fun and challenging clicker game experience.',
        'Subway Surfers': 'Subway Surfers is an endless runner mobile game developed by Kiloo and SYBO Games. In the game, players take on the role of young graffiti artists who run through subway tracks to escape from the grumpy inspector and his dog. Players must dodge obstacles, collect coins, and power-ups while running through vibrant and diverse environments. With its colorful graphics, catchy music, and fast-paced gameplay, Subway Surfers offers an exciting and addictive experience that keeps players coming back for more. The game has become a global phenomenon, with millions of downloads and a dedicated fan base that continues to enjoy new updates and content.',
        'Crossy Road': 'Crossy Road is a popular mobile game developed by Hipster Whale that combines the classic arcade gameplay of Frogger with modern graphics and mechanics. In the game, players control a character as they navigate through traffic, rivers, and other obstacles to reach the other side of the screen. With its charming voxel art style, quirky characters, and endless gameplay, Crossy Road offers a fun and addictive experience that appeals to players of all ages. The game features a variety of unlockable characters, challenging levels, and competitive leaderboards that keep players engaged and coming back for more.',
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
    fullscreenBtn.style.flexDirection = 'row';
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