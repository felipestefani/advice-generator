window.onload = getAdvice()

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then( resposta => {
        return resposta = resposta.json()
    })
    .then( resposta => {
        renderiza(resposta.slip.id,resposta.slip.advice)
    })
    .catch( (erro) => {
        console.log(erro);
    })
}

function renderiza(id, advice) {
    let main = document.querySelector('main')
    let minWidth = window.innerWidth
    let svg = ''
    if(minWidth >= 600){
        svg = `<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`
    } else {
        svg = `<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`
    }
    main.innerHTML = `
                    <p id='advice-id'>ADVICE #${id}</P>
                    <p id='advice-text'>"${advice}"</p>
                    <p id='advice-separator'>${svg}</p>
                    <button> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg> </button>`
    
    let button = document.querySelector('button')
    button.addEventListener('click', getAdvice)
}

window.addEventListener('resize', resizeSvg)

function resizeSvg(){
    let minWidth = window.innerWidth
    let separator = document.getElementById('advice-separator')
    if(minWidth >= 600){
        separator.innerHTML = `<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`
    } else {
        separator.innerHTML = `<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>`
    }
}