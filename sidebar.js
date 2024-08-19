// Função para alternar a visibilidade da barra de navegação
function toggleSidebar() {
    var navegationHeader = document.querySelector('.navegation_header');
    var isVisible = navegationHeader.style.marginLeft === '0px';

    if (isVisible) {
        // Oculta a barra de navegação
        navegationHeader.style.marginLeft = '-100vw';
        navegationHeader.style.animationName = ''; // Remove a animação
    } else {
        // Exibe a barra de navegação
        navegationHeader.style.marginLeft = '0';
        navegationHeader.style.animationName = 'showSidebar'; // Aplica a animação
    }
}

// Adiciona um ouvinte de evento ao botão de alternância
document.querySelector('.btn_icon_header').addEventListener('click', toggleSidebar);