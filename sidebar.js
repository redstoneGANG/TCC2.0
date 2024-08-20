function toggleSidebar() {
    var navegationHeader = document.querySelector('.navegation_header');
    var isVisible = navegationHeader.style.marginLeft === '0px';

    if (isVisible) {

        navegationHeader.style.marginLeft = '-100vw';
        navegationHeader.style.animationName = 'hidesidebar';

    } else {

        navegationHeader.style.marginLeft = '-10vw';
        navegationHeader.style.animationName = 'showSidebar';
    }
}

document.querySelector('.btn_icon_header').addEventListener('click', toggleSidebar);