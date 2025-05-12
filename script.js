let = currentCategory = null // Nenhuma categoria selecionada inicialmente

 function showCategory(categoryId) {
      
       const container = document.getElementById('quote-container');
      container.innerHTML = ""; // limpa conteúdo anterior

      const filteredQuotes = quotes.filter(q => q.id === categoryId);

      filteredQuotes.forEach(quote => {
        const img = document.createElement('img');
        img.src = quote.src;
        img.alt = quote.alt;
        img.classList.add('quote-img');
        container.appendChild(img);
      });

    }

    function showAllquotes() {
        document.getElementById("quotesContainer").style.display = "flex";
        document.getElementById("quote-container").innerHTML = ""; // esconde outras categorias
        
}

const quotes = [
    {id: "motiv", src: "images/mq/mq01.png", alt: "motivational quote"},
    {id: "song", src: "images/sgq/sgq02.png", alt: "song quote"},
    {id: "love", src: "images/lq/lq01.png", alt: "love quote"},
    {id: "short", src: "images/shq/shq01.png", alt: "short quote"},
    {id: "motiv", src: "images/mq/mq02.png", alt: "motivational quote"},
    {id: "song", src: "images/sgq/sgq01.png", alt: "song quote"},
    {id: "short", src: "images/shq/shq02.png", alt: "short quote"},
    {id: "love", src: "images/lq/lq02.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq03.png", alt: "song quote"},
    {id: "motiv", src: "images/mq/mq03.png", alt: "motivational quote"},
    {id: "short", src: "images/shq/shq03.png", alt: "short quote"},
    {id: "love", src: "images/lq/lq03.png", alt: "love quote"},
    {id: "motiv", src: "images/mq/mq04.png", alt: "motivational quote"},
    {id: "short", src: "images/shq/shq04.png", alt: "short quote"},
    {id: "love", src: "images/lq/lq04.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq04.png", alt: "song quote"},
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

const downloadBtn = document.createElement("a")
downloadBtn.href = quote.src
downloadBtn.download = "quote-justquotes.png"
downloadBtn.textContent = "download";
downloadBtn.style.display = "block"; // coloca abaixo da imagem
downloadBtn.style.marginTop = "5px";

    div.appendChild(img)
    div.appendChild(downloadBtn)
    container.appendChild(div)
    
})

