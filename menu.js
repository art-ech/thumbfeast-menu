const backBtn = document.querySelector('.fa-solid.fa-circle-arrow-left')

const backToHome = ()=> {
    backBtn.addEventListener('click', (e)=> {
        location.replace('https://art-ech.github.io/thumbfeast-homepage/')
    })
}

backToHome()