// Collection of my works
let Mywork = [
    {
        name: 'Portfolio',
        desc: 'Personal Portfolio that was designed and built from scratch',
        tech:'Figma, HTML, CSS, Vanilla JS',
        preview: 'https://noodlesjs.dev/',
        code: 'https://github.com/NoodlesJS/Portfolio',
        img: './img/projects/portfolio.png',
        alt: 'Picture of project'
    },
    {
        name: 'Quick Pokedex',
        desc: 'A pokedex application that uses various web api to fetch quick short info about any pokemon from the offical pokedex',
        tech:'Figma, HTML, CSS, Vanilla JS',
        preview: 'https://quickpokedex.netlify.com/',
        code: 'https://github.com/NoodlesJS/Quick-Pokedex',
        img: './img/projects/quick_pokedex.png',
        alt: 'Picture of project'
    },
    {
        name: 'USBD Market Access',
        desc: 'A landing page for the company USBD market access.',
        tech:'Figma, HTML, CSS',
        preview: 'https://usbdmarketaccess.com/',
        code: 'https://github.com/NoodlesJS/USBD-MARKET-ACCESS-Landing-page',
        img: './img/projects/usbd.png',
        alt: 'Picture of project'
    },
    {
        name: 'Overwatch Quiz',
        desc: 'A quiz application based on the 1st Overwatch League season. This was the 1st application I ever built',
        tech:'HTML, CSS, Vanilla JS',
        preview: 'https://noodlesjs.github.io/Overwatch-league-quiz/',
        code: 'https://github.com/NoodlesJS/Overwatch-league-quiz',
        img: './img/projects/overwatch_quiz.png',
        alt: 'Picture of project'
    },
    
];




// burger menu interaction
let burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function() {
    document.querySelector('.burger-menu').classList.toggle('hide');
    // document.querySelector('.burger-menu').classList.toggle(show);
    
})




// rendering my work to the DOM
function RenderWork(data) {
    let workSection = document.querySelector('.section3');
    workSection.innerHTML += data;
}

// looping through MyWork Object to render data
function loopWork() {
    Mywork.forEach(function(project) {
        let data = `
        <div class="card">
                <div class="picture-box-card">
                    <img src="${project.img}" alt="${project.alt}">
                </div>
                <div class="box-card">
                    <p class="work-title">${project.name}</p>
                    <p class="small-text">${project.desc}</p>
                    <p class="small-text"><i> Tech Used: ${project.tech}</i></p>
                    <div class="button-container">
                        <a href="${project.preview}" target="_blank"><button class="button-filled">PREVIEW</button></a>
                        <a href="${project.code}" target="_blank"><button class="button-hollow">CODE</button></a>
                    </div>
                </div>
            </div>
        `

        RenderWork(data);
    })
}


loopWork();