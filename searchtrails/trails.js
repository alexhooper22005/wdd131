
const startBtn = document.querySelector('#startsearching');
if (startBtn) {
    startBtn.addEventListener('click', function() {
        window.location.href = "trails-search.html";
    });
}

const homeBtn = document.querySelector('#homebutton');
if (homeBtn) {
    homeBtn.addEventListener('click', function() {
        window.location.href = "trails-homepage.html";
    });
}


const trails = [
    {
        name: 'Saint Anthony Dunes',
        location: 'Saint Anthony, Idaho',
        tags: ['dessert', 'sand', 'open', 'hills', 'jumps', 'Idaho', 'saint anthony dunes'],
        rating: 3,
        description: 'St. Anthony Sand Dunes offer rolling hills and massive 400-foot dunes. The terrain is soft, steep, and fast, making it a moderately challenging ride for most riders.',
        image: 'images/Snt-anthony.jpg'
    },
    {
        name: 'Dessert Wells',
        location: 'Gold Canyon, Arizona',
        tags: ['dirt', 'flat', 'dessert', 'jumps', 'Arizona', 'dessert wells'],
        rating: 1,
        description: 'Desert Wells OHV Area offers easy, flat desert trails with wide open riding and minimal obstacles. Great for beginners or casual rides near Gold Canyon.',
        image: 'images/dessert-wells.jpg'
    },
    {
        name: 'Luthy Meadows',
        location: 'Ririe, Idaho',
        tags: ['dirt', 'forrest', 'camping', 'Idaho', 'luthy meadows'],
        rating: 2.5,
        description: 'Luthy Meadows sits in a quiet rural area near Ririe, Idaho, with open grassy meadows bordered by pockets of trees and light forest. The blend of open space and wooded sections makes it a relaxing spot for camping or staging outdoor trips.',
        image: 'images/luthy_meadows.jpg'
    },
    {
        name: 'Glammis Dunes',
        location: 'Brawley California',
        tags: ['sand', 'dessert', 'hills', 'jumps', 'camping', 'open', 'California', 'glammis dunes'],
        rating: 4,
        description: 'Glamis Sand Dunes features massive, steep dunes with soft powdery sand. Its one of the biggest and most challenging dune systems in the U.S.',
        image: 'images/glammis.jpg'
    },
    {
        name: 'Poison Flats',
        location: 'Heise, Idaho',
        tags: ['forrest', 'open', 'dirt', 'camping', 'Idaho', 'poison flats'],
        rating: 2,
        description: 'Poison Flats in Heise offers easy to moderate dirt trails with open flats, light forest, and a few mild climbs. Great for beginners and casual riders.',
        image: 'images/poison-flats.jpg'
    },
    {
        name: 'Stinking Springs',
        location: 'Poplar Idaho',
        tags: ['scenic', 'sand', 'dirt', 'trees', 'springs', 'Idaho', 'stinking springs'],
        rating: 2,
        description: 'Stinking Springs near Ririe, Idaho features mixed terrain — open flats, steep climbs, and rocky/loose-rock sections on the upper slopes. Popular for ATV, dirt-bike, mountain-bike and hiking, the trail gains good elevation and offers scenic views of the Snake River Plain. Overall difficulty: 3/5 — a solid moderate ride for those with some experience.',
        image: 'images/stinking-springs.jpg'
    },
    {
        name: 'Four Peaks',
        location: 'Tonto National Forrest, Arizona',
        tags: ['forrest', 'Arizona', 'tonto national forrest', 'dirt', 'mountains', 'four peaks'],
        rating: 3,
        description: 'Four Peaks, AZ lies in the Mazatzal Mountains inside Tonto National Forest, reachable via Four Peaks Road east of Phoenix. The road climbs from desert foothills through saguaro-filled lower terrain up toward mountain forest — an easy-to-moderate off-road/4x4 trip with sweeping views and relatively mellow roads. Difficulty: 2–3/5 (stock SUV or AWD usually fine, but take it slow on narrow or rocky sections).',
        image: 'images/four-peaks.jpg'
    },
    {
        name: 'Bulldog Canyon',
        location: 'Tonto National Forrest, Arizona',
        tags: ['Arizona', 'bulldog canyon', 'tonto national forrest', 'dessert', 'sand', 'washes'],
        rating: 3,
        description: 'Bulldog Canyon OHV Area (AZ) lies in Tonto National Forest northeast of Mesa/Phoenix. It offers desert-mountain terrain, washes, rocky hills and scenic views. With a mix of easy dirt roads and some technical washes/rocky sections, difficulty is moderate (≈ 3/5). A Tonto NF OHV permit is required — good for stock 4x4 or ATVs, but 4WD/high clearance recommended for rougher parts.',
        image: 'images/bulldog.jpg'
    },
    {
        name: 'Rolls OHV',
        location: 'Tonto National Forrest, Arizona',
        tags: ['Arizona', 'tonto natinal forrest', 'dessert', 'sand', 'open', 'the rolls ohv', 'washes'],
        rating: 2,
        description: 'The Rolls OHV Area (AZ) lies in Tonto National Forest near Mesa, offering desert-washes, sandy and rocky trails over roughly 27,000 acres with about 65 miles of routes. Terrain ranges from easy dirt and sand washes to occasional loose‐rock or bedrock climbs, offering mostly beginner- to light-moderate-level off-road access.',
        image: 'images/rolls.jpg'
    },
    {
        name: 'Arizona Cycle Park (ACP)',
        location: 'Buckeye, Arizona',
        tags: ['Arizona', 'dirt', 'open', 'track', 'motocross', 'jumps', 'races'],
        rating: 4,
        description: 'Arizona Cycle Park (ACP) — motocross / jump track near Buckeye Arizona. Offers packed dirt tracks with jumps, berms, straightaways, rhythm sections and more. Intended for dirt bikes / motocross riders.',
        image: 'images/acp.jpg'
    }
];

let trailContainer = document.querySelector('#description');

const searchBtn = document.querySelector('.searchicon');
searchBtn.addEventListener('click', search);

const searchInput = document.querySelector('#searchinput');  //used AI to help understand how to search using the enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        search();
    }
});

function search() {
    let trailQuery = searchInput.value.trim();

    let filterTrail = trails.filter(trail => 
        trail.name.toLowerCase().includes(trailQuery.toLowerCase()) ||
        trail.description.toLowerCase().includes(trailQuery.toLowerCase()) ||
        trail.tags.some(tag => tag.toLowerCase().includes(trailQuery.toLowerCase()))
    );

    let sortedTrails = filterTrail.sort((a, b) => a.rating - b.rating);

    trailContainer.innerHTML = '';
    sortedTrails.forEach(renderTrail);
}

function trailTemplate(trail) {
    return `
    <div id="howtouse">
        <img src="${trail.image}" aria-label="Image of ${trail.name}">
        <div id="info">
            <h1 aria-label="${trail.name}">${trail.name}</h1>
            <h2 aria-label="${trail.location}">${trail.location}</h2>
            <p>${difficultyTemplate(trail.rating)}</p>
            <p aria-label="${trail.description}">${trail.description}</p>
        </div>
    </div>
    `;
}

function renderTrail(trail) {
    let html = trailTemplate(trail);
    trailContainer.innerHTML += html;
}

function difficultyTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5">Difficulty: `;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-boot"> 🟩</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-empty"> ⬜</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function init() {
    let randomNum = Math.floor(Math.random() * trails.length);
    renderTrail(trails[randomNum]);
}

init();

                    
