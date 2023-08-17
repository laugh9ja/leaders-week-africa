// Mobile Menu
const menuIcon = document.getElementById('menu-icon');
const menuBox = document.getElementById('menu-box');
const menuOpenClass = 'menu-open';

menuIcon.addEventListener('click', () => {
    menuBox.classList.toggle(menuOpenClass);
    menuIcon.src = menuBox.classList.contains(menuOpenClass) ? 'images/close.png' : 'images/menu.png';
});

// Featured Speakers
const featuredSpeakersContainer = document.querySelector('.featured-speakers .section-container');

const collectionOfSpeakers = [
    {
        name: 'Tony O. Elumelu',
        image_url: './images/speaker-1.webp',
        image_credit: 'Speaker 1 image',
        job: 'CEO UBA Group, Heirs Holding',
        description: `Anthony Onyemaechi Elumelu CFR is a Nigerian economist, and
                 philanthropist. He chairs Heirs Holding, Transcorp and is the founder of Tony Elumelu Foundation.`,
    },
    {
        name: 'Aliko Dangote',
        image_url: './images/speaker-2.jpg',
        image_credit: 'Speaker 2 image',
        job: 'Nigerian Businessman',
        description: `Aliko Dangote GCON is a Nigerian businessman and industrialist. He is the founder, 
     and CEO of the Dangote Group, the largest industrial conglomerate in West Africa.`,
    },
    {
        name: 'Obiageli "Oby" Ezekwesili',
        image_url: './images/speaker-3.jpg',
        image_credit: 'Speaker 3 image',
        job: 'Former Minister of Education of Nigeria',
        description: `Oby Ezekwesili is an economic policy expert, an advocate for good governance
      and human capital development.`,
    },
    {
        name: 'Ibukun Awosika',
        image_url: './images/speaker-4.webp',
        image_credit: 'Speaker 4 image',
        job: 'Nigerian Business Woman and Author',
        description: `Ibukunoluwa Abiodun Awosika is a Nigerian business woman, motivational speaker, and an author. 
      She was former Chairman of First Bank of Nigeria. She was appointed
      a member of Binance Global Advisory Board in September 2022.`,
    },
    // ... (other speakers)
];

collectionOfSpeakers.forEach(speaker => {
    const speakerBox = createSpeakerBox(speaker);
    featuredSpeakersContainer.appendChild(speakerBox);
});

function createSpeakerBox(speaker) {
    const speakerBox = document.createElement('article');
    speakerBox.classList.add('speaker-box', 'card-box', 'd-grid');

    const speakerImage = createSpeakerImage(speaker.image_url, speaker.image_credit);
    const speakerInfos = createSpeakerInfos(speaker.name, speaker.job, speaker.description);

    speakerBox.appendChild(speakerImage);
    speakerBox.appendChild(speakerInfos);

    return speakerBox;
}

function createSpeakerImage(imageUrl, imageCredit) {
    const speakerImageContainer = document.createElement('div');
    speakerImageContainer.classList.add('speaker-img', 'd-flex');

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = imageCredit;

    speakerImageContainer.appendChild(image);
    return speakerImageContainer;
}

function createSpeakerInfos(name, job, description) {
    const speakerInfosContainer = document.createElement('div');
    speakerInfosContainer.classList.add('speaker-infos', 'd-flex');

    const speakerName = document.createElement('h4');
    speakerName.textContent = name;

    const speakerJob = document.createElement('p');
    speakerJob.classList.add('title');
    speakerJob.textContent = job;

    const separator = document.createElement('div');
    separator.classList.add('separator');

    const speakerDescription = document.createElement('p');
    speakerDescription.classList.add('description');
    speakerDescription.textContent = description;

    speakerInfosContainer.appendChild(speakerName);
    speakerInfosContainer.appendChild(speakerJob);
    speakerInfosContainer.appendChild(separator);
    speakerInfosContainer.appendChild(speakerDescription);

    return speakerInfosContainer;
}

// Show/Hide Speakers
const moreButton = document.querySelector('.btn-more');
const speakerBoxes = document.querySelectorAll('.speaker-box');

function toggleSpeakerVisibility() {
    const isMobile = window.innerWidth < 768;
    const displayStyle = isMobile ? 'none' : 'grid';

    speakerBoxes.forEach((box, index) => {
        if (index >= 2) {
            box.style.display = displayStyle;
        }
    });
}

window.addEventListener('resize', toggleSpeakerVisibility);
moreButton.addEventListener('click', () => {
    moreButton.classList.toggle('active');
    toggleSpeakerVisibility();
});
