const buttons = [
    { name: '2048', image: 'https://codehs.com/uploads/05fa6c5469f4f54c0fa6c5e04b5c8051', link: '/eatmorewaffles/Games/2048' },
    { name: 'Block Blast', image: 'https://codehs.com/uploads/210d31ed32cf3b80dbf0d0f6ee8c74c6', link: '/eatmorewaffles/Games/BlockBlast' },
    { name: 'Domions', image: 'https://codehs.com/uploads/c400adcb35c991aa03d987730b29a78f' },
    { name: 'Drift Boss', image: 'https://codehs.com/uploads/7f3758605f9ebce9c0eacd984e27fd6d', link: '/eatmorewaffles/Games/DriftBoss' },
    { name: 'Drift Hunters', image: 'https://codehs.com/uploads/31a7a798b1ea657119eeb2fc0bfac610', link: '/eatmorewaffles/Games/DriftHunters' },
    { name: 'Geometry Dash', image: 'https://codehs.com/uploads/661c4ab005b7a80c3bc3f9bc4bde842b' },
    { name: 'Geometry Dash Subzero', image: '/eatmorewaffles/images/subzero.png', link: '/eatmorewaffles/Games/GeometryDashSubzero' },
    { name: 'Geometry Dash Meltdown', image: '/eatmorewaffles/images/meltdown.png', link: '/eatmorewaffles/Games/GeometryDashMeltdown' },
    { name: 'OvO', image: '/eatmorewaffles/images/ovo.png', link: '/eatmorewaffles/Games/OvO' },
    { name: 'Retro Ping Pong', image: '/eatmorewaffles/images/pong.png', link: '/eatmorewaffles/Games/RetroPingPong' },
    { name: 'Rodha', image: '/eatmorewaffles/images/rodha.png', link: '/eatmorewaffles/Games/Rodha' },
    { name: 'Shortcut Race', image: '/eatmorewaffles/images/shortcut-race.png', link: '/eatmorewaffles/Games/ShortcutRace' },
    { name: 'Rolling Ball Game', image: '//eatmorewafflesimages/ball.png', link: '/eatmorewaffles/Games/Slope' },
    { name: 'Snow Rider 3d', image: '/eatmorewaffles/images/snow-rider.png', link: '/eatmorewaffles/Games/SnowRider3d' },
    { name: 'Spacebar Clicker', image: '/eatmorewaffles/images/spacebar.png', link: '/eatmorewaffles/Games/SpacebarClicker' },
    { name: 'Thorns And Balloons', image: '/eatmorewaffles/images/thorns-and-balloons.png', link: '/eatmorewaffles/Games/ThornsAndBalloons' },
    { name: 'Wheelie Bike', image: '/eatmorewaffles/images/wheelie-bike.png', link: '/eatmorewaffles/Games/WheelieBike' },
    { name: 'Planet Clicker', image: '/eatmorewaffles/images/planet-clicker.png', link: '/eatmorewaffles/Games/PlanetClicker' },
    { name: 'Sukia', image: '/eatmorewaffles/images/sukia.png', link: '/eatmorewaffles/Games/Sukia' },
    { name: 'Opposite Day', image: '/eatmorewaffles/images/opposite-day.png', link: '/eatmorewaffles/Games/OppositeDay' },
    { name: 'Slope Run', image: '/eatmorewaffles/images/slope-run.png', link: '/eatmorewaffles/Games/SlopeRun' },
    { name: 'Whopper Clicker', image: '/eatmorewaffles/images/whopper-clicker.png', link: '/eatmorewaffles/Games/WhopperClicker' },
    { name: 'Flappy Bird', image: '/eatmorewaffles/images/flappy-bird.png', link: '/eatmorewaffles/Games/FlappyBird' },
    { name: 'Swing Monkey', image: '/eatmorewaffles/images/swing-monkey.png', link: '/eatmorewaffles/Games/SwingMonkey' },
    { name: 'Mountian Bike Runner', image: '/eatmorewaffles/images/mountian-bike-runner.png', link: '/eatmorewaffles/Games/MountianBikeRunner' },
    { name: 'Freehand Skate', image: '/eatmorewaffles/images/freehand-skate.png', link: '/eatmorewaffles/Games/FreehandSkate' },
    { name: 'Falling Cubes', image: '/eatmorewaffles/images/falling-cubes.png', link: '/eatmorewaffles/Games/FallingCubes' },
    { name: '8 Ball Pool', image: '/eatmorewaffles/images/8ballpool.png', link: '/eatmorewaffles/Games/8BallPool' },
    { name: 'Are You Human?', image: '/eatmorewaffles/images/are-you-human.png', link: '/eatmorewaffles/Games/AreyouHuman' },
    { name: 'Ball Blast', image: '/eatmorewaffles/images/ball-blast.png', link: '/eatmorewaffles/Games/BallBlast' },
    { name: 'Basket Goal', image: '/eatmorewaffles/images/basket-ball.png', link: '/eatmorewaffles/Games/BasketGoal' },
    { name: 'Burger Time', image: '/eatmorewaffles/images/burger-time.png', link: '/eatmorewaffles/Games/BurgerTime' },
    { name: 'Candy Clicker', image: '/eatmorewaffles/images/candy-clicker.png', link: '/eatmorewaffles/Games/CandyClicker' },
    { name: 'Candy Clicker 2', image: '/eatmorewaffles/images/candy-clicker2.png', link: '/eatmorewaffles/Games/CandyClicker2' },
    { name: 'Capybara Clicker', image: '/eatmorewaffles/images/capybara-clicker.png', link: '/eatmorewaffles/Games/CapybaraClicker' },
    { name: 'Checkers', image: '/eatmorewaffles/images/checkers.png', link: '/eatmorewaffles/Games/Checkers' },
    { name: 'Cookie Clicker', image: '/eatmorewaffles/images/cookie-clicker.png', link: '/eatmorewaffles/Games/CookieClicker' },
    { name: 'Draw The Rest', image: '/eatmorewaffles/images/drawtherest.png', link: '/eatmorewaffles/Games/DrawTheRest' },
];

const buttonContainer = document.getElementById('buttonContainer');
const searchInput = document.getElementById('search');
const counterDisplay = document.getElementById('counterDisplay');
const sortOptions = document.getElementById('sortOptions'); // Sorting dropdown

// Variable to track whether click counts are visible
let showClickCounts = false;  // Set this to `false` so click counts are hidden by default

// Function to get the click count for a specific button from localStorage
function getClickCount(buttonName) {
    const count = localStorage.getItem(buttonName);
    return count ? parseInt(count) : 0;
}

// Function to set the click count for a specific button in localStorage
function setClickCount(buttonName, count) {
    localStorage.setItem(buttonName, count);
}

// Function to create each button
function createButton(button) {
    const a = document.createElement('a');
    a.className = 'menu-button';
    a.href = button.link;

    // Initialize the button's click count from localStorage
    let count = getClickCount(button.name);

    const img = document.createElement('img');
    img.src = button.image;
    a.appendChild(img);

    // Create the overlay with the game name
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerText = button.name; // Display the name of the game
    a.appendChild(overlay);

    // Create the pop-up for the click count
    const popUp = document.createElement('div');
    popUp.className = 'popup';
    popUp.innerText = `Clicked: ${count} clicks`; // Display the click count
    a.appendChild(popUp);

    // Update the click count and localStorage when the button is clicked
    a.addEventListener('click', () => {
        count++;
        setClickCount(button.name, count);

        // If click counts are visible, update the pop-up
        if (showClickCounts) {
            popUp.innerText = `Clicked: ${count} times`;
        }
    });

    // Hide or show the click count based on the toggle state
    if (!showClickCounts) {
        popUp.style.display = 'none'; // Hide click counts initially
    }

    return a;
}

// Function to render buttons and filter them by search input
function renderButtons(filter = '', sortBy = 'clickCount') {
    buttonContainer.innerHTML = ''; // Clear current buttons

    // Sort the buttons based on the selected sorting option
    let sortedButtons;

    if (sortBy === 'clickCount') {
        sortedButtons = buttons.sort((a, b) => {
            const countA = getClickCount(a.name);
            const countB = getClickCount(b.name);

            // First, sort by click count
            if (countB !== countA) {
                return countB - countA; // Sort in descending order of click count
            } else {
                // If the click counts are the same, sort alphabetically by name
                return a.name.localeCompare(b.name);
            }
        });
    } else if (sortBy === 'alphabetical') {
        sortedButtons = buttons.sort((a, b) => {
            return a.name.localeCompare(b.name); // Sort alphabetically by name
        });
    }

    const filteredButtons = sortedButtons.filter(button => button.name.toLowerCase().includes(filter.toLowerCase()));

    filteredButtons.forEach(button => {
        buttonContainer.appendChild(createButton(button));
    });

    // Update the counter display with the number of visible buttons
    counterDisplay.textContent = `${filteredButtons.length} Games Loaded`;
}

// Event listener for search input to filter buttons
searchInput.addEventListener('input', (e) => {
    renderButtons(e.target.value, sortOptions.value);
});

// Event listener for sort options dropdown to change sorting method
sortOptions.addEventListener('change', (e) => {
    renderButtons(searchInput.value, e.target.value);  // Re-render buttons based on selected sorting
});

// Initial render of buttons
renderButtons();
