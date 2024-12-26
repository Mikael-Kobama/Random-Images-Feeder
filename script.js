// Seleciona o container onde as imagens serão adicionadas
const container = document.querySelector(".content");

// Número de linhas de imagens que queremos adicionar ao feed
const rows = 7;

// Função para exibir o carregamento enquanto as imagens estão sendo carregadas
function showLoading() {
  document.getElementById("loading").style.display = "block"; // Mostra o indicador de carregamento
}

// Função para esconder o carregamento quando as imagens são carregadas
function hideLoading() {
  document.getElementById("loading").style.display = "none"; // Esconde o indicador de carregamento
}

// Função principal que cria e adiciona as imagens ao container
function loadImages() {
  showLoading(); // Exibe o indicador de carregamento

  let imagesLoaded = 0; // Variável para contar as imagens carregadas

  // Loop para criar as imagens
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img"); // Cria um elemento de imagem
    img.src = `https://source.unsplash.com/random/${randomSize()}`; // Define a URL da imagem com um tamanho aleatório
    img.alt = "Imagem aleatória"; // Atribui um texto alternativo (para acessibilidade)

    // Aumenta o contador de imagens carregadas assim que a imagem for carregada
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === rows * 3) {
        hideLoading(); // Esconde o carregamento quando todas as imagens estiverem carregadas
      }
    };

    container.appendChild(img); // Adiciona a imagem ao container
  }
}

// Função que retorna um tamanho aleatório para a imagem
function randomSize() {
  return `${randomNumber()}x${randomNumber()}`; // Gera uma string como "500x300"
}

// Função que gera um número aleatório entre 300 e 600 (para o tamanho das imagens)
function randomNumber() {
  return Math.floor(Math.random() * 300) + 300; // Gera números entre 300 e 600
}

// Carrega as imagens quando a página é carregada
window.onload = loadImages;
