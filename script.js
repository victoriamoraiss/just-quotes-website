let = currentCategory = null // Nenhuma categoria selecionada inicialmente

function showCategory(category) {
    const categories = document.querySelectorAll('.category')
    
    // Se clicar na mesma categoria, mostra tudo
    if(currentCategory === category) {
        categories.forEach(el => el.styles.display = 'block')
        currentCategory = null // Resetar a seleção
        return
    }

    // Caso contrário, esconde todas e mostra apenas a selecionada
    categories.forEach(el => el.style.display = 'none')

    if (category === 'mq') {
        document.getElementById('motiv').style.display = 'block'
    } else if (category === 'lq') {
        document.getElementById('love').style.display = 'block'
    } else if (category === 'shq') {
        document.getElementById('short').style.display = 'block'
    } else if (category === 'sgq') {
        document.getElementById('song').style.display = 'block'
    }
    
    currentCategory = category;
}

// Mostrar tudo no início
window.onload = () => {
    const categories = document.querySelectorAll('.category')
    categories.forEach(el => el.style.display = 'block')
}

const quotes = [
    {id: "motiv", src: "images/mq/mq01.png", alt: "motivational quote"},
    {id: "motiv", src: "images/mq/mq02.png", alt: "motivational quote"},
    {id: "love", src: "images/lq/lq01.png", alt: "love quote"},
    {id: "love", src: "images/lq/lq02.png", alt: "love quote"},
    {id: "short", src: "images/shq/shq01.png", alt: "short quote"},
    {id: "short", src: "images/shq/shq02.png", alt: "short quote"},
    {id: "song", src: "images/sgq/sgq01.png", alt: "song quote"},
    {id: "song", src: "images/sgq/sgq02.png", alt: "song quote"}
]

const container = document.getElementById("quotesContainer")

quotes.forEach(quote => {
    const div = document.createElement("div")
    div.className = "category"
    div.id = quote.id

    const img = document.createElement("img")
    img.src = quote.src
    img.alt = quote.alt
    img.width = 160
    img.height = 160

    div.appendChild(img)
    container.appendChild(div)
})