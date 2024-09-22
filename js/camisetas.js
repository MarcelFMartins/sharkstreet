const marcas = ['HIGH', 'NIKE', 'OFFWHITE', 'CHRONIC', 'SANTACRUZ', 'SUFGANG']; // Adicione os nomes das marcas aqui
const carrosselContainer = document.getElementById('carrossel-container');

marcas.forEach(marca => {
    const carrossel = document.createElement('div');
    carrossel.className = 'carrossel';
    carrossel.innerHTML = `<h2>${marca.charAt(0).toUpperCase() + marca.slice(1)}</h2>
                           <div class="imagens" id="${marca}-imagens"></div>
                           <button class="prev" onclick="move(-1, '${marca}')">❮</button>
                           <button class="next" onclick="move(1, '${marca}')">❯</button>`;

    const imagensDiv = carrossel.querySelector('.imagens');
    for (let i = 1; i <= 6; i++) { // Supondo que você tenha 5 imagens por marca
        const img = document.createElement('img');
        img.src = `img/${marca}/${i}.jpg`; // Ajuste o caminho se necessário
        img.alt = `Camiseta ${i}`;
        imagensDiv.appendChild(img);
    }

    carrosselContainer.appendChild(carrossel);
});

function move(direction, marca) {
    const imagens = document.getElementById(`${marca}-imagens`);
    const totalImagens = imagens.children.length;

    // Obter a posição atual
    let currentIndex = parseInt(imagens.dataset.currentIndex) || 0;
    currentIndex = (currentIndex + direction + totalImagens) % totalImagens;

    // Atualiza a posição das imagens
    const imageWidth = imagens.parentElement.clientWidth;
    imagens.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    // Atualiza o índice atual
    imagens.dataset.currentIndex = currentIndex;
}

// Inicializa a posição das imagens
document.querySelectorAll('.imagens').forEach(imagens => {
    imagens.dataset.currentIndex = 0; // Define a posição inicial como 0
});
