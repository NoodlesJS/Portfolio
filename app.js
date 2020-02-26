// Collection of my works
let Mywork = [
    {
        name: 'Carevillage',
        desc: 'Full stack application that helps keep track of your medicine',
        tech:'Figma, HTML, CSS, Vanilla JS, Node.js, Express, MongoDB',
        button1: 'PREVIEW',
        button2: 'CODE',
        button1_style: 'button-filled',
        button2_style: 'button-hollow',
        button1_link: 'https://gentle-lake-89085.herokuapp.com/',
        button2_link: 'https://github.com/NoodlesJS/Carevillage',
        img: './img/projects/carevillage.png',
        alt: 'Picture of project'
    },
    {
        name: 'Quick Pokedex',
        desc: 'A pokedex application that uses various web api to fetch quick short info about any pokemon from the offical pokedex',
        tech:'Figma, HTML, CSS, Vanilla JS',
        button1: 'PREVIEW',
        button2: 'CODE',
        button1_style: 'button-filled',
        button2_style: 'button-hollow',
        button1_link: 'https://quickpokedex.netlify.com/',
        button2_link: 'https://github.com/NoodlesJS/Quick-Pokedex',
        img: './img/projects/quick_pokedex.png',
        alt: 'Picture of project'
    },
    {
        name: 'LOP Network UI',
        desc: 'UI design of an application for client',
        tech:'Figma',
        button1: 'PREVIEW',
        button2: 'NULL',
        button1_style: 'button-filled',
        button2_style: 'button-inactive',
        button1_link: 'https://www.behance.net/gallery/90415571/LOP-network-UI',
        button2_link: '#',
        img: './img/projects/lopnetwork.png',
        alt: 'Picture of project'
    },
    {
        name: 'Portfolio',
        desc: 'Personal Portfolio that was designed and built from scratch',
        tech:'Figma, HTML, CSS, Vanilla JS',
        button1: 'PREVIEW',
        button2: 'CODE',
        button1_style: 'button-filled',
        button2_style: 'button-hollow',
        button1_link: 'https://noodlesjs.dev/',
        button2_link: 'https://github.com/NoodlesJS/Portfolio',
        img: './img/projects/portfolio.png',
        alt: 'Picture of project'
    },
    // {
    //     name: 'Overwatch Quiz',
    //     desc: 'A quiz application based on the 1st Overwatch League season. This was the 1st application I ever built',
    //     tech:'HTML, CSS, Vanilla JS',
    //     button1: 'PREVIEW',
    //     button2: 'CODE',
    //     button1_style: 'button-filled',
    //     button2_style: 'button-hollow',
    //     button1_link: 'https://noodlesjs.github.io/Overwatch-league-quiz/',
    //     button2_link: 'https://github.com/NoodlesJS/Overwatch-league-quiz',
    //     img: './img/projects/overwatch_quiz.png',
    //     alt: 'Picture of project'
    // }
    
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
                        <a href="${project.button1_link}" target="_blank"><button class="${project.button1_style}">${project.button1}</button></a>
                        <a href="${project.button2_link}" target="_blank"><button class="${project.button2_style}">${project.button2}</button></a>
                    </div>
                </div>
            </div>
        `

        RenderWork(data);
    })
}


loopWork();