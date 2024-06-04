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

    const rainbowText4 = document.querySelector('.rainbow-text');
    if (rainbowText4) {
        rainbowText4.remove();
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
        h1.className = 'rainbow-text'
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
    frame.style.overflow = 'hidden';

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
        'BitLife': 'https://floopynetworkgamingservice.github.io/ftfyfghjdfgh/',
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
        'Wordle Unlimited': 'https://floopynetworkgamingservice.github.io/gfdjklhjb/',
        'Flight Simulator 3D v2.8': 'https://scratch.mit.edu/projects/74221074/embed',
        'Boxing Random': 'https://floopynetworkgamingservice.github.io/fgfghf/',
        'Vex 8': 'https://floopynetworkgamingservice.github.io/ghfgfhj/',
        'Crazy Cars': 'https://floopynetworkgamingservice.github.io/dfghdfgh/',
        'Rooftop Snipers': 'https://floopynetworkgamingservice.github.io/dfgdfgh/',
        'Geometry Dash Classic': 'https://floopynetworkgamingservice.github.io/ghjfghj/',
        'Rocket League 2D': 'https://floopynetworkgamingservice.github.io/ghjknhjkhjk/',
        'Monkey Mart': 'https://floopynetworkgamingservice.github.io/hjkghjk/',
        'Hide and Smash': 'https://floopynetworkgamingservice.github.io/dfgh/',
        'Pixel Smash Duel': 'https://floopynetworkgamingservice.github.io/fghjyfghjfghj/',
        'Swingo': 'https://floopynetworkgamingservice.github.io/dfgsdfg/',
        'Impostor.io': 'https://floopynetworkgamingservice.github.io/fghjfghjfghjh/',
        'Drive Mad': 'https://floopynetworkgamingservice.github.io/tyfgjfghjy/',
        'Pou': 'https://floopynetworkgamingservice.github.io/tyyuyu/',
        'Soccer Heads': 'https://floopynetworkgamingservice.github.io/fghfghdfgh/',
        'Tower Crash 3D': 'https://floopynetworkgamingservice.github.io/fghdfghfgh/',
        'Idle Restaurants': 'https://floopynetworkgamingservice.github.io/fgghjfghj/',
        'Doodle Jump': 'https://floopynetworkgamingservice.github.io/yuityui/',
        'Mr.Bullet 3D': 'https://floopynetworkgamingservice.github.io/gfhdghf/',
        'Rusher Crusher': 'https://floopynetworkgamingservice.github.io/fghjfghj/',
        'Mutazone': 'https://floopynetworkgamingservice.github.io/ghdfghjfghj/',
        'Basketball Line': 'https://floopynetworkgamingservice.github.io/ydgughghj/',
        'Car Rush': 'https://floopynetworkgamingservice.github.io/ghjghjghj/',
        'Fruita Crush': 'https://floopynetworkgamingservice.github.io/dfghdfghfgh/',
        'Stick Merge': 'https://floopynetworkgamingservice.github.io/ghjfghjdfghc/',
        'Stick Merge 2': 'https://floopynetworkgamingservice.github.io/dfghdfghfghx/',
        'Dino Game' : 'https://floopynetworkgamingservice.github.io/dfshdfghdfgh/',
        'Slither.io': 'https://scratch.mit.edu/projects/702543294/embed',
        'Appel': 'https://scratch.mit.edu/projects/60917032/embed',
        'Agar.io': 'https://scratch.mit.edu/projects/66146572/embed',
        'Paper.io': 'https://scratch.mit.edu/projects/539460754/embed',
        'Paper.io 2': 'https://scratch.mit.edu/projects/549817033/embed',
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
        'Basket Random': 'Basket Random by RHM Interactive injects chaos into basketball with its unpredictable obstacles and power-ups. Players face off in one-on-one matches against AI or friends, navigating giant fans, slippery ice patches, and more. Despite the mayhem, core basketball mechanics remain, demanding skill and strategy. With colorful graphics and fast-paced gameplay, Basket Random promises hilarity and excitement in every match.',
        'Basketball Legends': 'Basketball Legends is a popular basketball game that allows players to compete in one-on-one or two-on-two matches with famous basketball players. Developed by MadPuffers, the game features intuitive controls, smooth animations, and realistic physics that capture the excitement and intensity of real basketball games. Players can choose from a roster of legendary basketball stars, each with unique skills and abilities, and compete in tournaments or quick matches to prove their basketball prowess. With its engaging gameplay, vibrant graphics, and competitive multiplayer modes, Basketball Legends offers an immersive and thrilling basketball experience that appeals to sports fans and gamers alike.',
        'OvO': 'OvO by Dedra Games is a fast-paced platformer that challenges players with its minimalistic design and precise controls. In this game, you guide a small character through a series of increasingly complex levels filled with obstacles, traps, and puzzles. The game features smooth, responsive controls that allow for fluid movement and quick reflexes, essential for navigating the intricate platforming challenges. OvO\'s clean graphics and engaging level design keep players hooked as they strive to complete each stage and achieve the fastest times. With its blend of simplicity and difficulty, OvO offers a rewarding experience for fans of skill-based platformers.',
        'Eggy Car': 'Eggy Car by Beedo Games is a delightful and challenging driving game where players must transport a fragile egg over a series of bumpy and unpredictable terrains. The goal is to keep the egg balanced on top of the car without letting it fall off as you navigate hills, valleys, and obstacles. The game\'s physics-based mechanics require careful driving and precise control to avoid losing the egg. With its charming graphics, simple controls, and addictive gameplay, Eggy Car provides an entertaining and engaging experience that tests your patience and driving skills.',
        'Cookie Clicker': 'Cookie Clicker is an incremental idle game that challenges players to bake as many cookies as possible by clicking on a giant cookie on the screen. Developed by Orteil, the game features simple mechanics and addictive gameplay that encourages players to click furiously to increase their cookie production. Players can use the cookies they earn to purchase upgrades, buildings, and power-ups that automate the baking process and boost their cookie output. With its charming graphics, humorous writing, and endless progression, Cookie Clicker offers a relaxing and rewarding experience that keeps players coming back for more. The game has inspired a genre of idle games and continues to receive updates and new content regularly.',
        'Super Mario Wonder': 'Super Mario Wonder is a fan-made platformer game that pays homage to the classic Super Mario series. Developed by a dedicated fan, the game features familiar characters, enemies, and power-ups in a new and challenging adventure. Players control Mario as he navigates through colorful levels, defeats enemies, and collects coins to reach the flagpole at the end of each stage. With its retro graphics, catchy music, and engaging gameplay, Super Mario Wonder captures the essence of the beloved franchise while adding its own unique twists and surprises. The game offers a nostalgic and entertaining experience for fans of the Super Mario series and platformer games in general.',
        'Fruit Ninja': 'Fruit Ninja is a popular mobile game that challenges players to slice and dice various fruits with a swipe of their finger. Developed by Halfbrick Studios, the game features fast-paced gameplay, colorful graphics, and satisfying fruit-slicing mechanics that make it a fun and addictive experience. Players must slice as many fruits as possible while avoiding bombs and other obstacles to achieve high scores and unlock new blades and backgrounds. With its simple controls, engaging gameplay, and competitive leaderboards, Fruit Ninja offers a casual and entertaining gaming experience that appeals to players of all ages.',
        'Spacebar Clicker': 'Spacebar Clicker is a simple and addictive web-based game that challenges players to click the spacebar as many times as possible within a limited time frame. The game features a countdown timer and a counter that tracks the number of times the spacebar is pressed, allowing players to compete against themselves or others for the highest score. With its minimalist design and straightforward mechanics, Spacebar Clicker offers a quick and engaging diversion that tests players\' speed and dexterity. The game\'s competitive nature and easy accessibility make it a popular choice for players looking for a fun and challenging clicker game experience.',
        'Subway Surfers': 'Subway Surfers is an endless runner mobile game developed by Kiloo and SYBO Games. In the game, players take on the role of young graffiti artists who run through subway tracks to escape from the grumpy inspector and his dog. Players must dodge obstacles, collect coins, and power-ups while running through vibrant and diverse environments. With its colorful graphics, catchy music, and fast-paced gameplay, Subway Surfers offers an exciting and addictive experience that keeps players coming back for more. The game has become a global phenomenon, with millions of downloads and a dedicated fan base that continues to enjoy new updates and content.',
        'Crossy Road': 'Crossy Road is a popular mobile game developed by Hipster Whale that combines the classic arcade gameplay of Frogger with modern graphics and mechanics. In the game, players control a character as they navigate through traffic, rivers, and other obstacles to reach the other side of the screen. With its charming voxel art style, quirky characters, and endless gameplay, Crossy Road offers a fun and addictive experience that appeals to players of all ages. The game features a variety of unlockable characters, challenging levels, and competitive leaderboards that keep players engaged and coming back for more.',
        'Wordle Unlimited': 'Wordle Unlimited is a web-based version of the popular word puzzle game Wordle that allows players to play an unlimited number of daily puzzles. Developed by WordleUnlimited.com, the game challenges players to guess a five-letter word within six attempts by entering words and receiving feedback on their correctness. Players must use deductive reasoning and process of elimination to solve the puzzle and uncover the hidden word. With its minimalist design, engaging gameplay, and daily challenges, Wordle Unlimited offers a fun and addictive word game experience that tests players\' vocabulary and problem-solving skills.',
        'Flight Simulator 3D v2.8': 'Flight Simulator 3D v2.8 on Scratch by WO997 offers an immersive and realistic flying experience right from your browser. In this detailed simulator, players take control of various aircraft, navigating through stunning 3D environments. The game features intuitive controls and accurate physics, making it a thrilling and educational experience for aviation enthusiasts. With multiple missions and scenarios, players can test their piloting skills in different weather conditions and terrains. Whether you\'re performing daring maneuvers or enjoying a serene flight, Flight Simulator 3D v2.8 delivers a comprehensive and engaging simulation that captures the essence of real-world flying.',
        'Boxing Random': 'Boxing Random by RHM Interactive delivers a knockout punch of excitement with its unpredictable and action-packed boxing matches. Players step into the ring against AI opponents or friends in wild and wacky boxing showdowns. With every match presenting new challenges and surprises, from unconventional arenas to unexpected power-ups, Boxing Random keeps players on their toes. With its intuitive controls, vibrant visuals, and fast-paced gameplay, Boxing Random delivers a thrilling and entertaining boxing experience that packs a punch for players of all skill levels.',
        'Vex 8': 'Vex 8, created by Amazing Adam, takes platforming to new heights with its challenging obstacles and precise controls. Players navigate through a series of intricate levels filled with spikes, traps, and moving platforms, testing their agility and reflexes. With its smooth gameplay mechanics and dynamic level design, Vex 8 offers a satisfying balance of difficulty and reward. Whether you\'re dodging deadly hazards or mastering complex maneuvers, Vex 8 delivers an exhilarating platforming experience that will keep you coming back for more.',
        'Crazy Cars': 'Crazy Cars, developed by No Pressure Studios, is an adrenaline-fueled racing game that takes players on a wild ride through vibrant and dynamic tracks. Featuring a diverse roster of customizable vehicles, players can choose their favorite car and hit the road to compete in high-speed races against AI opponents or friends. With its arcade-style gameplay and intuitive controls, Crazy Cars offers an accessible yet exhilarating racing experience suitable for players of all skill levels. From drifting around tight corners to executing daring jumps and stunts, Crazy Cars delivers non-stop action and excitement that will keep players on the edge of their seats. Strap in, rev up your engines, and get ready for the race of a lifetime in Crazy Cars!',
        'Rooftop Snipers': 'Rooftop Snipers, brought to you by New Eich Games, is a fast-paced and hilariously chaotic two-player shooting game. Set atop a series of precarious rooftops, players engage in frantic duels armed with nothing but rifles and gravity-defying jumps. With simple controls and physics-based gameplay, Rooftop Snipers offers an accessible yet intensely competitive experience. Whether you\'re dodging bullets or trying to outmaneuver your opponent, every match is a heart-pounding showdown where one well-timed shot can mean victory. With its minimalist visuals and addictive gameplay, Rooftop Snipers is the ultimate test of skill, reflexes, and sheer luck in the world of rooftop warfare.',
        'Geometry Dash Classic': 'Geometry Dash Classic, presented by TopFrivGames.com, is a thrilling and addictive platformer that challenges players with its fast-paced action and unforgiving obstacles. In this retro-style game, players control a geometric shape as it dashes through a series of increasingly difficult levels filled with spikes, traps, and other hazards. With its simple one-touch controls and rhythmic gameplay, Geometry Dash Classic offers a satisfying blend of precision and timing. Each level is meticulously designed to test players\' reflexes and determination, rewarding perseverance with exhilarating moments of triumph. With its vibrant graphics and pulse-pounding soundtrack, Geometry Dash Classic is a timeless arcade experience that will keep players coming back for more.',
        'Rocket League 2D': '2D Rocket League is an exciting and fast-paced sports game that brings the thrill of rocket-powered soccer to a two-dimensional arena. Players control agile, rocket-equipped cars, using their boost to hit the ball and score spectacular goals against opponents. With its simple yet addictive mechanics, 2D Rocket League offers intense multiplayer matches where quick reflexes and strategic play are key. The game features vibrant graphics and smooth animations, capturing the essence of the beloved 3D original in a unique 2D format. Perfect for fans of competitive sports and arcade action, 2D Rocket League delivers non-stop excitement and endless fun.',
        'Monkey Mart': 'Monkey Mart by TinyDobbins is a charming and engaging simulation game where players manage their own bustling supermarket run by adorable monkeys. In this delightful game, you oversee every aspect of the store, from stocking shelves and setting prices to helping customers and expanding the market. With its colorful graphics and intuitive controls, Monkey Mart offers a fun and relaxing experience as you balance supply and demand, upgrade your store, and ensure customer satisfaction. Perfect for fans of management and tycoon games, Monkey Mart provides endless hours of entertainment and strategic gameplay in a whimsical, monkey-filled world.',
        'Hide and Smash': 'Hide and Smash by Madbox is a thrilling and fast-paced multiplayer game that combines the classic fun of hide and seek with exhilarating action. In this game, players can choose to either hide or become the seeker, but with a twist: seekers are equipped with powerful weapons to smash through the environment and uncover hidden players. The game features vibrant and destructible environments, adding an extra layer of strategy and excitement. With its dynamic gameplay and lively graphics, Hide and Smash offers endless fun and intense matches, perfect for friends and gamers looking for a fresh take on a beloved classic.',
        'Pixel Smash Duel': 'Pixel Smash Duel by RHM Interactive is a high-energy, retro-style fighting game that pits players against each other in intense one-on-one duels. Set in a vibrant pixelated world, players use a variety of weapons and power-ups to knock their opponent off the platform while avoiding environmental hazards. The game’s simple controls and fast-paced action make it easy to pick up but challenging to master. With its engaging multiplayer mode, colorful graphics, and addictive gameplay, Pixel Smash Duel provides endless hours of fun and competition for players of all ages. Prepare for chaotic battles and show off your skills in this thrilling pixelated showdown!',
        'Swingo': 'Swingo by Blumgi is a captivating and innovative arcade game that challenges players to navigate through a series of dynamic levels using a swinging mechanic. In this game, you control a character equipped with a grappling hook, allowing you to swing from platform to platform, avoid obstacles, and collect rewards. The game features vibrant, colorful graphics and smooth physics-based gameplay that make each swing feel exhilarating. With intuitive controls and progressively challenging levels, Swingo offers a fun and addictive experience that tests your timing and precision. Perfect for quick sessions or extended play, Swingo provides endless entertainment in a whimsical and engaging world.',
        'Impostor.io': 'Impostor.io is an action-packed multiplayer game that throws players into a chaotic arena where deception and combat reign supreme. Set in a vibrant, space-themed environment, each player controls an impostor equipped with various weapons and power-ups. The objective is simple: outsmart and eliminate your opponents to become the last impostor standing. With its intuitive controls, fast-paced gameplay, and strategic elements, Impostor.io keeps players on their toes as they navigate the battlefield, avoid being caught, and unleash surprise attacks. The game’s colorful graphics and engaging mechanics make it a thrilling and addictive experience for fans of competitive and strategic action games.',
        'Drive Mad': 'Drive Mad by Martin Magni is an exhilarating driving game that challenges players with its unique blend of physics-based puzzles and high-speed action. Players navigate a variety of rugged terrains and obstacle-filled courses, pushing their driving skills to the limit. With intuitive controls and realistic physics, each level presents a new and exciting challenge, from jumping over gaps to balancing on narrow paths. The game features vibrant graphics and dynamic environments that keep the experience fresh and engaging. Perfect for thrill-seekers and puzzle enthusiasts alike, Drive Mad offers endless fun and excitement as you tackle increasingly difficult tracks and master the art of precision driving.',
        'Pou': 'Pou by Paul Salameh is a delightful virtual pet game where players care for an adorable, customizable alien creature named Pou. In this engaging game, you feed, bathe, and entertain Pou, ensuring its happiness and health. As you nurture your Pou, you can explore various mini-games, earn coins, and unlock a wide range of outfits and accessories to personalize your pet. With its charming graphics, intuitive controls, and a variety of activities to keep Pou entertained, this game offers endless fun and a rewarding experience for players of all ages. Pou\'s whimsical world and interactive gameplay make it a beloved choice for virtual pet enthusiasts.',
        'Soccer Heads': 'Soccer Heads by Famobi is a fun and fast-paced sports game that brings an arcade twist to classic soccer. Players control oversized, comical heads of famous soccer players in intense one-on-one matches. Using simple controls, you can jump, kick, and head the ball to outscore your opponent within a limited time. The game features various power-ups and obstacles that add excitement and unpredictability to each match. With its vibrant graphics, catchy music, and competitive gameplay, Soccer Heads provides endless entertainment for soccer fans and casual gamers alike. Whether you\'re playing solo or challenging friends, Soccer Heads offers a hilarious and action-packed soccer experience.',
        'Tower Crash 3D': 'Tower Crash 3D is an addictive and visually striking physics-based puzzle game that challenges players to strategically demolish towering structures. Each level presents a unique 3D tower constructed from colorful blocks, and your goal is to knock it down using a limited number of balls. With realistic physics and a variety of block types, players must carefully aim and time their shots to cause maximum destruction. The game features vibrant graphics, intuitive controls, and progressively challenging levels that keep players engaged. Perfect for those who love puzzles and demolition, Tower Crash 3D offers endless fun and satisfaction as you watch the towers crumble in spectacular fashion.',
        'Idle Restaurants': 'Idle Restaurant Tycoon by Kolibri Games is an engaging and addictive simulation game that puts players in charge of building and managing their own restaurant empire. Starting with a small diner, you gradually expand your business by upgrading facilities, hiring skilled staff, and creating a diverse menu to attract more customers. The game features intuitive controls and charming graphics, making it easy and enjoyable to play. With various restaurants to unlock and manage, along with numerous upgrades and challenges, Idle Restaurant Tycoon offers a rewarding experience as you grow your culinary empire from a humble eatery to a world-renowned chain. Perfect for fans of idle and management games, this game provides endless hours of strategic fun and entrepreneurial excitement.',
        'Doodle Jump': 'Doodle Jump by Lima Sky is a classic mobile game that challenges players to guide a bouncing character as high as possible on a sheet of graph paper. With simple tilt controls, players must navigate through platforms, avoid obstacles, and collect power-ups to reach new heights. The game features charming doodle-style graphics, catchy music, and endless gameplay that keeps players coming back for more. With its addictive and challenging gameplay, Doodle Jump offers a fun and engaging experience that appeals to players of all ages. Whether you\'re aiming for a high score or just looking for a quick gaming session, Doodle Jump provides endless fun and excitement in a whimsical and colorful world.',
        'Mr.Bullet 3D': 'Mr. Bullet 3D by Lion Studios is an exhilarating puzzle shooter game that combines sharp wit with precision shooting. Players step into the shoes of Mr. Bullet, a master spy and sharpshooter, tasked with taking down enemies in a series of cleverly designed levels. The game features realistic 3D graphics and physics, challenging players to aim and time their shots perfectly to hit targets, deflect bullets, and trigger explosive chain reactions. With a variety of weapons and increasingly complex scenarios, Mr. Bullet 3D offers endless entertainment and brain-teasing fun. Perfect for fans of strategic puzzles and action-packed gameplay, this game promises hours of thrilling missions and satisfying victories.',
        'Rusher Crusher': 'Rusher Crusher by Seal Unicorn Studios is an action-packed arcade game that challenges players to navigate through chaotic traffic and crush obstacles in their path. Players control a powerful vehicle equipped with formidable crushing abilities, racing against time to clear the road and reach their destination. With vibrant graphics, dynamic environments, and intuitive controls, Rusher Crusher offers a thrilling gameplay experience. Each level presents new challenges and obstacles, from congested highways to treacherous terrain, requiring quick reflexes and strategic thinking. Perfect for adrenaline junkies and fans of fast-paced action games, Rusher Crusher delivers endless excitement and destruction.',
        'Mutazone': 'Mutazone by Jeff Ramos is a captivating adventure game set in a post-apocalyptic world teeming with mutated creatures and hidden secrets. Players explore a vast, richly detailed environment, navigating through dangerous territories while uncovering the story of the Mutazone. Equipped with unique abilities and customizable gear, players must battle fierce mutants, solve intricate puzzles, and forge alliances with other survivors. The game features stunning graphics, an immersive soundtrack, and a compelling narrative that keeps players engaged. With its blend of action, exploration, and strategic gameplay, Mutazone offers an unforgettable journey through a world transformed by mutation and chaos.',
        'Basketball Line': 'Basketball Line is a creative and addictive puzzle game that challenges players to score baskets by drawing the perfect trajectory. Players must use their finger or mouse to draw lines, guiding the basketball to the hoop while navigating various obstacles and complex level designs. Each level presents unique challenges that test players\' strategic thinking and precision. With its simple yet engaging mechanics, colorful graphics, and progressively difficult stages, Basketball Line offers endless fun for players of all ages. Perfect for casual gamers and puzzle enthusiasts, this game delivers a satisfying mix of creativity and skill as you aim to become a basketball drawing master.',
        'Car Rush': 'Car Rush is a thrilling arcade racing game that puts players behind the wheel for high-speed adventures on winding tracks. With intuitive controls and vibrant graphics, players navigate through various scenic environments, dodging traffic and obstacles while collecting coins and power-ups. Each race offers increasing challenges and opportunities to showcase your driving skills, from sharp turns to sudden roadblocks. The game\'s dynamic gameplay, coupled with its exciting soundtrack and visually appealing design, ensures an adrenaline-pumping experience. Perfect for fans of fast-paced racing games, Car Rush delivers non-stop action and excitement, making every race a heart-pounding journey to the finish line.',
        'Fruita Crush': 'Fruita Crush is a delightful and addictive match-3 puzzle game that invites players to dive into a vibrant world filled with juicy fruits and challenging puzzles. The goal is to match three or more fruits of the same kind to clear them from the board, earning points and completing objectives in each level. With its colorful graphics, cheerful music, and smooth gameplay, Fruita Crush offers a fun and engaging experience for players of all ages. The game features hundreds of levels, each with unique layouts and goals, keeping the challenge fresh and exciting. Perfect for fans of casual and puzzle games, Fruita Crush provides endless entertainment as you swap, match, and crush your way through a fruity adventure.',
        'Stick Merge': 'Stick Merge by TinyDobbins is an exciting and innovative action game that combines elements of strategy and creativity. In this game, players control stick figures with the ability to merge weapons and items to create powerful new tools and combat gear. The goal is to eliminate enemies and overcome challenges by strategically merging and upgrading your arsenal. Featuring simple controls, dynamic gameplay, and a variety of levels, Stick Merge offers a unique and engaging experience. With its minimalist graphics and compelling mechanics, the game keeps players hooked as they experiment with different combinations and tactics to achieve victory. Perfect for fans of action and strategy games, Stick Merge provides endless fun and creative combat scenarios.',
        'Stick Merge 2': 'Stick Merge 2 by TinyDobbins is an exciting sequel that enhances the action-strategy gameplay of the original. Players control stick figures with the unique ability to merge weapons and items, creating powerful new combat gear to defeat challenging enemies. The game introduces new foes, complex levels, and additional merging possibilities, offering deeper strategy and more intense battles. With improved graphics, smoother animations, and varied environments, Stick Merge 2 delivers an engaging and visually appealing experience. Perfect for fans of action and strategy games, this sequel promises endless fun as you merge, fight, and conquer.',
        'Dino Game': 'Dino Game is a classic and addictive endless runner game that challenges players to guide a dinosaur through a prehistoric landscape filled with obstacles. The game features simple controls, requiring players to jump over cacti and duck under flying pterodactyls to avoid collisions. With its charming pixel art graphics, catchy music, and increasing difficulty, Dino Game offers a fun and engaging experience that keeps players coming back for more. The game also features a high score system, encouraging players to compete against themselves or others for the longest distance traveled. Perfect for fans of retro games and casual gaming, Dino Game provides endless entertainment and nostalgic fun.',
        'Slither.io': 'Slither.io is a popular multiplayer online game that challenges players to control a colorful snake and grow in size by consuming glowing orbs scattered throughout the arena. Developed by Steve Howse, the game features simple controls and addictive gameplay that encourages players to outmaneuver opponents and become the largest snake on the server. With its vibrant graphics, competitive multiplayer mode, and strategic gameplay, Slither.io offers an engaging and thrilling experience that keeps players coming back for more. The game has gained a large following and continues to receive updates and new content regularly, making it a favorite among fans of browser-based games and casual gaming.',
        'Appel': 'Micro Manager, in his desperation to gain the power of the golden apples has begun to take control of planet Appelmoeshapje. As Micro Manager\'s influence grows, Appel finds not only the inhabitants of, but the very world is turning against him! - Help Appel to navigate through each level, avoiding danger, collecting as many golden apples as you can before finally facing Micro Manager and restoring peace to the world.',
        'Agar.io': 'Agar.io is a popular multiplayer online game that challenges players to control a cell and consume smaller cells to grow in size while avoiding larger cells that can consume them. Developed by Matheus Valadares, the game features simple controls and addictive gameplay that encourages players to strategize and outmaneuver opponents. With its minimalist graphics, competitive multiplayer mode, and dynamic gameplay, Agar.io offers an engaging and thrilling experience that keeps players coming back for more. The game has gained a large following and continues to receive updates and new content regularly, making it a favorite among fans of browser-based games and casual gaming.',
        'Paper.io': 'Paper.io is a popular multiplayer online game that challenges players to control a colored square and expand their territory by capturing empty space on the map. Developed by Voodoo, the game features simple controls and addictive gameplay that encourages players to outmaneuver opponents and claim as much territory as possible. With its minimalist graphics, competitive multiplayer mode, and strategic gameplay, Paper.io offers an engaging and thrilling experience that keeps players coming back for more. The game has gained a large following and continues to receive updates and new content regularly, making it a favorite among fans of browser-based games and casual gaming.',
        'Paper.io 2': 'Paper.io 2 is a sequel to the popular multiplayer online game Paper.io, offering new features, maps, and challenges for players to enjoy. Developed by Voodoo, the game retains the core gameplay mechanics of the original, where players control a colored square and expand their territory by capturing empty space on the map. With its simple controls, addictive gameplay, and competitive multiplayer mode, Paper.io 2 offers an engaging and thrilling experience that keeps players coming back for more. The game has gained a large following and continues to receive updates and new content regularly, making it a favorite among fans of browser-based games and casual gaming.',
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