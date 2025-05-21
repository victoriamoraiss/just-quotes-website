let = currentCategory = null // Nenhuma categoria selecionada inicialmente

function showCategory(category) {
  const allQuotes = document.querySelectorAll('.category');

  allQuotes.forEach(quote => {
    if (category === 'all' || quote.id === category) {
      quote.style.display = 'block';
    } else {
      quote.style.display = 'none';
    }
  });
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
    {id: "short", src: "images/shq/shq04.png", alt: "short quote"},
    {id: "love", src: "images/lq/lq04.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq04.png", alt: "song quote"},
    {id: "short", src: "images/shq/shq05.png", alt: "short quote"},
    {id: "song", src: "images/sgq/sgq06.png", alt: "song quote"},
    {id: "love", src: "images/lq/lq05.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq05.png", alt: "song quote"},
    {id: "motiv", src: "images/mq/mq04.png", alt: "motivational quote"},
    {id: "motiv", src: "images/mq/mq05.png", alt: "motivational quote"},
    {id: "love", src: "images/lq/lq06.png", alt: "love quote"},
    {id: "short", src: "images/shq/shq06.png", alt: "short quote"},
    {id: "motiv", src: "images/mq/mq06.png", alt: "motivational quote"},
    {id: "short", src: "images/shq/shq07.png", alt: "short quote"},
    {id: "motiv", src: "images/mq/mq07.png", alt: "motivational quote"},
    {id: "love", src: "images/lq/lq07.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq08.png", alt: "song quote"},
    {id: "motiv", src: "images/mq/mq08.png", alt: "motivational quote"},
    {id: "song", src: "images/sgq/sgq07.png", alt: "song quote"},
    {id: "love", src: "images/lq/lq08.png", alt: "love quote"},
    {id: "short", src: "images/shq/shq08.png", alt: "short quote"},
    {id: "short", src: "images/shq/shq09.png", alt: "short quote"},
    {id: "motiv", src: "images/mq/mq09.png", alt: "motivational quote"},
    {id: "love", src: "images/lq/lq09.png", alt: "love quote"},
    {id: "love", src: "images/lq/lq10.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq09.png", alt: "song quote"},
    {id: "short", src: "images/shq/shq10.png", alt: "short quote"},
    {id: "song", src: "images/sgq/sgq10.png", alt: "song quote"},
    {id: "motiv", src: "images/mq/mq10.png", alt: "motivational quote"},
    {id: "motiv", src: "images/mq/mq11.png", alt: "motivational quote"},
    {id: "love", src: "images/lq/lq11.png", alt: "love quote"},
    {id: "short", src: "images/shq/shq11.png", alt: "short quote"},
    {id: "song", src: "images/sgq/sgq11.png", alt: "song quote"},
    {id: "song", src: "images/sgq/sgq12.png", alt: "song quote"},
    {id: "motiv", src: "images/mq/mq12.png", alt: "motivational quote"},
    {id: "short", src: "images/shq/shq12.png", alt: "short quote"},
    {id: "love", src: "images/lq/lq12.png", alt: "love quote"},
    {id: "love", src: "images/lq/lq13.png", alt: "love quote"},
    {id: "song", src: "images/sgq/sgq13.png", alt: "song quote"},
    {id: "motiv", src: "images/mq/mq13.png", alt: "motivational quote"},
    {id: "short", src: "images/shq/shq13.png", alt: "short quote"},
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



