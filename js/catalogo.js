const tamanhos = ['M', 'G', 'GG'];
const camisetas = {};

// Loop para cada tamanho
tamanhos.forEach(tamanho => {
    camisetas[tamanho] = [];
    for (let i = 1; i <= 20; i++) { // Supondo que você tenha até 82 imagens por tamanho
        camisetas[tamanho].push({
            imagem: `../img/catalogo/${tamanho}/1 (${i}).jpg` // Caminho da imagem com o formato correto
        });
    }
});

const selectTamanho = document.getElementById('tamanho');
const resultadoDiv = document.getElementById('resultado');

// Evento de mudança no select
selectTamanho.addEventListener('change', () => {
    const tamanhoSelecionado = selectTamanho.value;
    mostrarCamisetas(tamanhoSelecionado);
});

function mostrarCamisetas(tamanho) {
    resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

    const pecasDisponiveis = camisetas[tamanho];
    if (pecasDisponiveis.length === 0) {
        resultadoDiv.innerHTML = '<p>Nenhuma peça disponível para este tamanho.</p>';
        return;
    }

    // Cria as divs para cada peça disponível
    pecasDisponiveis.forEach(peca => {
        const pecaDiv = document.createElement('div');
        pecaDiv.className = 'peca';

        const img = document.createElement('img');
        img.src = peca.imagem; // Adiciona a imagem
        img.alt = `Camiseta tamanho ${tamanho}`; // Texto alternativo

        const nome = document.createElement('span');

        pecaDiv.appendChild(img);
        pecaDiv.appendChild(nome);
        resultadoDiv.appendChild(pecaDiv);
    });
}

// Mostrar camisetas do tamanho padrão ao carregar
mostrarCamisetas(selectTamanho.value);
