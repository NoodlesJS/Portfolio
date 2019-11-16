// Collection of my works
let Mywork = [
    {
        name: 'Quick Pokedex',
        desc: 'A quick pokedex application that uses various web api to fetch quick short bite info about any pokemon in the offical pokedex',
        preview: 'https://quickpokedex.netlify.com/',
        code: 'https://github.com/NoodlesJS/Quick-Pokedex',
        img: './img/projects/quick_pokedex.png',
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